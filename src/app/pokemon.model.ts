export interface Pokemon {
  name: string;
  imageUrl: string;
  height: number;
  weight: number;
  types: string[];
  abilities: string[];
  stats: { name: string; value: number }[];
}