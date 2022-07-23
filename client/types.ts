export interface PastFight {
  outcome: string;
  opponent: string;
  method: string;
  round: Number;
  time: string;
}
export interface Fighter {
  name: string;
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
