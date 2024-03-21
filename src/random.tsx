import {
  Characters,
  GrenadeManufacturers,
  ShieldManufacturers,
  WeaponManufacturers,
  type Roll,
} from "./types";

function _getRandom<T>(choices: T[]): T {
  const index = Math.floor(Math.random() * choices.length);
  return choices[Math.min(index, choices.length - 1)];
}

export function getNewRoll(): Roll {
  return {
    character: _getRandom(Characters),
    shield: _getRandom(ShieldManufacturers),
    grenade: _getRandom(GrenadeManufacturers),
    weapon: _getRandom(WeaponManufacturers),
  };
}
