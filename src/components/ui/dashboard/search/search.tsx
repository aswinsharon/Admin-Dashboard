import { MdSearch } from "react-icons/md";
import React from "react";
import styles from "./search.module.css";
import { PlaceHolder } from "../../../../types/Types";

const Search: React.FC<PlaceHolder> = ({ placeholder }) => {
  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
      ></input>
    </div>
  );
};

export default Search;
