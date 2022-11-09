"use client";

import { useState } from "react";
import { Search as SearchIcon } from "react-feather";
import styles from "../styles/Search.module.css";
const Search = () => {
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.target.value);
  };

  const submitInput = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTextInput("");
  };

  const [textInput, setTextInput] = useState("");

  return (
    <form className={styles.container}>
      <input value={textInput} type="search" onChange={inputHandler} />
      <button onSubmit={submitInput} type="submit">
        <SearchIcon width={20} height={20} />
      </button>
    </form>
  );
};

export default Search;
