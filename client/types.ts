export interface PastFight {
  outcome: string;
  opponent: string;
  method: string;
  round: number;
  time: string;
}

export interface Physical {
  height?: number;
  weight?: number;
  reach?: number;
  age?: number;
}
export interface Fighter {
  name: string;
  physical: Physical;
  record: PastFight[];
}
// can we use extends here somehow? repeating the code is gross lolz
export interface Fight {
  red: string;
  blue: string;
}

export interface DetailedFight {
  red: Fighter;
  blue: Fighter;
}

export interface FightEvent {
  id?: string;
  org?: string;
  title?: string;
  fights?: Fight[];
}
