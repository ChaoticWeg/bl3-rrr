import dayjs from "dayjs";
import { useCallback, useMemo, useState } from "react";
import "./App.css";
import { getNewRoll } from "./random";
import type { Roll, StoredRoll } from "./types";

const STORAGE_KEY = "@bl3-rrr/roll";

function _readStoredRoll(): StoredRoll | null {
  const raw = localStorage.getItem(STORAGE_KEY);
  try {
    return JSON.parse(raw ?? "") as StoredRoll;
  } catch (err) {
    return null;
  }
}

function _getAndStoreNewRoll() {
  const newRoll = { rolledAt: Date.now(), roll: getNewRoll() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newRoll));
  return newRoll;
}

function App() {
  const [roll, setRoll] = useState<StoredRoll>(
    _readStoredRoll() ?? _getAndStoreNewRoll(),
  );

  const _reroll = useCallback(() => {
    const newRoll = _getAndStoreNewRoll();
    setRoll(newRoll);
  }, []);

  const at = useMemo(
    () => dayjs(roll.rolledAt).format("YYYY-MM-DD HH:mm:ss"),
    [roll],
  );

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
      <p>Rolled: {at}</p>
      <button onClick={_reroll}>Reroll</button>
      <div className="attrib-license">
        <p>
          Created by{" "}
          <a
            href="https://github.com/ChaoticWeg"
            target="_blank"
            rel="noreferrer noopener"
          >
            chaoticweg
          </a>
        </p>
        <p>
          Licensed under the{" "}
          <a
            href="https://github.com/ChaoticWeg/bl3-rrr/blob/main/LICENSE"
            target="_blank"
            rel="noreferrer noopener"
          >
            AGPL v3
          </a>
        </p>
        <p>
          Source code available on{" "}
          <a
            href="https://github.com/ChaoticWeg/bl3-rrr"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
        </p>
      </div>
    </>
  );
}

export default App;
