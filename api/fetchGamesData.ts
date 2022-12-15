export const fetchGamesData = async (path: string) => {
  const BASE_URL = "https://api.rawg.io/api";
  const RAWG_API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const response = await fetch(`${BASE_URL}/${path}?key=${RAWG_API_KEY}`);
  if (!response.ok) {
    throw new Error("Failed to fetch game data");
  }
  const data = await response.json();
  return data;
};
