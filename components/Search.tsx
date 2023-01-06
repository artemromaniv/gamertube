"use client";

import { useState, useEffect } from "react";
import { Search as SearchIcon } from "react-feather";
import { useQuery } from "@tanstack/react-query";
import styles from "../styles/Search.module.css";
import { fetchSearchResults } from "../api/fetchSearchResults";
import {GamesListProps} from '../types/GamesList'
import Link from "next/link";


const Search = () => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [textInput, setTextInput] = useState("");
  const { data, isLoading } = useQuery<GamesListProps>(
    [query],
    () => fetchSearchResults(query),{ staleTime: Infinity }
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
    <form onSubmit={e => e.preventDefault()}>
    <input
      type="text"
      value={query}
      onChange={e => setQuery(e.target.value)}
      onKeyDown={handleKeyDown}
    />
    {isLoading ? (
      'Loading...'
    ) : (
      <ul>
        {data?.results?.map((result, index: number) => (
          <li
            key={result.id}
            onClick={() => {
              setSelectedIndex(null);
            }}
            className={index === selectedIndex ? 'selected' : ''}
          >
            <Link href={result.id.toString()}>
            {result.name}
            </Link>
          </li>
        ))}
      </ul>
    )}
  </form>
  );
};

export default Search;
