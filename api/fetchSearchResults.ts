export const fetchSearchResults = async (query: string) => {
  const BASE_URL = "https://api.rawg.io/api";
  const RAWG_API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  if (query !== '') {    
    const response = await fetch(`${BASE_URL}/games?key=${RAWG_API_KEY}&search=${query}`);
  
    if (!response.ok) {
      throw new Error("Failed to fetch game data");
    }
  
    const data = await response.json();
  
    return data;
  }
};
