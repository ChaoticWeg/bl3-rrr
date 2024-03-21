export type Character = "Amara" | "Fl4k" | "Moze" | "Zane";
export type ShieldManufacturer = "Anshin" | "Hyperion" | "Pangolin";
export type GrenadeManufacturer =
  | "Atlas"
  | "Hyperion"
  | "Pangolin"
  | "Tediore"
  | "Torgue"
  | "Vladof";
export type WeaponManufacturer =
  | "Atlas"
  | "COV"
  | "DAHL"
  | "Hyperion"
  | "Jakobs"
  | "Maliwan"
  | "Tediore"
  | "Torgue"
  | "Vladof";

export const Characters: Character[] = ["Amara", "Fl4k", "Moze", "Zane"];
export const ShieldManufacturers: ShieldManufacturer[] = [
  "Anshin",
  "Hyperion",
  "Pangolin",
];
export const GrenadeManufacturers: GrenadeManufacturer[] = [
  "Atlas",
  "Hyperion",
  "Pangolin",
  "Tediore",
  "Torgue",
  "Vladof",
];
export const WeaponManufacturers: WeaponManufacturer[] = [
  "Atlas",
  "COV",
  "DAHL",
  "Hyperion",
  "Jakobs",
  "Maliwan",
  "Tediore",
  "Torgue",
  "Vladof",
];

export interface Roll {
  character: Character;
  shield: ShieldManufacturer;
  grenade: GrenadeManufacturer;
  weapon: WeaponManufacturer;
}

export interface StoredRoll {
  roll: Roll;
  rolledAt: number;
}
