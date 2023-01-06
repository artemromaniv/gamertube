export const fetchSearchResults = async () => {
  const response = await fetch("https://api.github.com/search/repositories?q=react");

  if (!response.ok) {
    throw new Error("Failed to fetch game data");
  }

  const data = await response.json();

  return data;
};
