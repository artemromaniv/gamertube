"use client";

import { useState, useEffect } from "react";
import { Search as SearchIcon } from "react-feather";
import { useQuery } from "@tanstack/react-query";
import { fetchSearchResults } from "../api/fetchSearchResults";
import { GamesListProps } from "../types/GamesList";
import Link from "next/link";
import styles from "./styles/Search.module.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [textInput, setTextInput] = useState("");
  const { data, isLoading } = useQuery<GamesListProps>(
    [query],
    () => fetchSearchResults(query),
    { staleTime: Infinity }
  );

  // useEffect hook to trigger the API request when the query value changes
  useEffect(() => {
    setSelectedIndex(null);
  }, [query]);

  // handle keyboard events to navigate through the suggestions
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prevIndex) => (prevIndex === null ? 0 : prevIndex + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      //@ts-ignore
      setSelectedIndex((prevIndex) => (prevIndex === 0 ? null : prevIndex - 1));
    }
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className={styles.container}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className={styles.input_field}
        />
      </form>
      {isLoading ? (
        <div className={styles.suggestions_container}>Loading...</div>
      ) : (
        <div className={styles.suggestions_container}>
          {data?.results?.map((result, index: number) => (
              <Link 
                href={result.id.toString()}
                onClick={() => {
                  setSelectedIndex(null);
                  setQuery("")
                }} 
                key={result.id} 
                className={styles.suggestion}>
                  {result.name}
              </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Search;
