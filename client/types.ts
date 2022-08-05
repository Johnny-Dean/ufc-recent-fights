export interface Physical {
  height?: number;
  weight?: number;
  reach?: number;
  age?: number;
}

export interface Striking {
  strikes_per_minute: number;
  strikes_absorbed: number;
  strike_accuracy: number;
  strike_defense: number;
}

export interface Ground {
  takedown_average: number;
  takedown_accuracy: number;
  takedown_defense: number;
  submissions_attempted: number;
}

export interface PastFight {
  outcome: string;
  opponent: string;
  method: string;
  round: number;
  time: string;
}

export interface Fighter {
  name: string;
  stats: {
    striking: Striking;
    ground: Ground;
  };
  physical: Physical;
  record: Array<PastFight>;
}

export interface Fight {
  red: string;
  blue: string;
}

export interface Event {
  id: string;
  org: string;
  title: string;
  fights: Fight[];
}
