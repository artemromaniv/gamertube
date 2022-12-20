import { Genre } from "./GamesList";

export type GameInfoProps = {
    id:number
    name: string;
    image: string;
    alt: string;
    genres?: Genre[]
  };