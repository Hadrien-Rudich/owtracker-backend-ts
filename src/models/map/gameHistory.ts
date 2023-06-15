export interface GameHistoryI {
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
