export interface Genre {
    id: number;
    name: string;
    slug: string;
}

interface Platforms {
    id: number;
    name: string;
    slug: string;
}

interface Result {
    id: number;
    name: string;
    background_image: string;
    platforms: Platforms[]
    genres: Genre[]
}
export type GamesListProps = {
    results: Result[]
  };
  