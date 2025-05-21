import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const MainComp = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    if (query.trim() === "") return;
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((res) => res.json())
      .then((data) => setBooks(data.items || []));
  }, [query]);

  return (
    <div className="main-div">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="input-icon" />
      <input
        placeholder="Search For a Book..."
        className="search-input"
        onChange={(e) => {
          setQuery(e.target.value.toLowerCase());
        }}
        value={query}
      />
      <div className="displayedbooks"></div>
    </div>
  );
};

export default MainComp;
