import dayjs from "dayjs";
import { useCallback, useMemo, useState } from "react";
import "./App.css";
import { getNewRoll } from "./random";
import type { Roll, StoredRoll } from "./types";

function _readStoredRoll(): StoredRoll | null {
  const raw = localStorage.getItem("@bl3-rrr/roll");
  try {
    return JSON.parse(raw ?? "") as StoredRoll;
  } catch (err) {
    return null;
  }
}

function App() {
  const [roll, setRoll] = useState<StoredRoll>(
    _readStoredRoll() ?? { rolledAt: Date.now(), roll: getNewRoll() },
  );

  const _reroll = useCallback(
    () => setRoll({ rolledAt: Date.now(), roll: getNewRoll() }),
    [],
  );

  const at = useMemo(() => dayjs(roll.rolledAt), [roll]);

  return (
    <>
      <h1>BL3 Rando Run Roller</h1>
      <div className="roll">
        {Object.keys(roll.roll)
          .filter((k) => Object.hasOwnProperty.call(roll.roll, k))
          .map((key) => (
            <div className="roll-line" key={key}>
              <p className="roll-key">
                {key.substring(0, 1).toUpperCase()}
                {key.substring(1)}
              </p>
              <p className="roll-value">{roll.roll[key as keyof Roll]}</p>
            </div>
          ))}
      </div>
      <p>Rolled: {at.format("YYYY-MM-DD HH:mm:ss")}</p>
      <button onClick={_reroll}>Reroll</button>
    </>
  );
}

export default App;
