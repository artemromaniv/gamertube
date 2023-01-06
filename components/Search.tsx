"use client";

import { useState, useEffect } from "react";
import { Search as SearchIcon } from "react-feather";
import { useQuery } from "@tanstack/react-query";
import styles from "../styles/Search.module.css";
import { fetchSearchResults } from "../api/fetchSearchResults";

interface SearchResult {
  id: string;
  title: string;
}

const Search = () => {
  // const { data, isLoading } = useQuery<SearchResult[]>(
  //   ['search'],
  //   () => fetchSearchResults()
  // );
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [textInput, setTextInput] = useState("");

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
    {/* {isLoading ? (
      'Loading...'
    ) : (
      <ul>
        {data?.map((result, index) => (
          <li
            key={result.id}
            onClick={() => {
              setQuery(result.title);
              setSelectedIndex(null);
            }}
            className={index === selectedIndex ? 'selected' : ''}
          >
            {result.title}
          </li>
        ))}
      </ul>
    )} */}
  </form>
  );
};

export default Search;
