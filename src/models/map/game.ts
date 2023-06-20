export namespace Game {
  export interface Base {
    id: number;
    user: number;
    profile: string;
    result: string;
    map: string;
    mapType: string;
    mapImageUrl: string;
    heroes: string[];
    heroesImageUrl: string[];
    date: string;
  }

  export interface New {
    user: number;
    profile: string;
    result: string;
    map: string;
    mapType: string;
    mapImageUrl: string;
    heroes: string[];
    heroesImageUrl: string[];
  }

  export interface Update {
    profile?: string;
    result?: string;
    map?: string;
    mapType?: string;
    mapImageUrl?: string;
    heroes?: string[];
    heroesImageUrl?: string[];
    date?: string;
  }
}
