interface pastFight {
  outcome: string;
  opponent: string;
  method: string;
  round: Number;
  time: string;
}
export interface Fighter {
  name: string;
  record: pastFight[];
}
export interface Fight {
  red: string;
  blue: string;
}
export interface FightEvent {
  id?: string;
  org?: string;
  title?: string;
  fights?: Fight[];
}
