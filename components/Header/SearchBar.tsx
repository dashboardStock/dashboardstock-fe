"use client";

import { styled } from "@styled-system/jsx";
import { useRef } from "react";

const SearchBarContainer = styled("div", {
  base: {
    width: "64.6vw",
    height: "100%",
    borderRadius: "0.52vw",
    background: "white",
    display: "flex",
    alignItems: "center",
    padding: "0.52vw",
  },
});

const SearchInput = styled("input", {
  base: {
    flex: "1",
    border: "none",
    outline: "none",
  },
});

const SearchButton = styled("button", {
  base: {
    color: "white",
    backgroundColor: "#6536ff",
    height: "100%",
    borderRadius: "0.52vw",
    border: "none",
    padding: "0 1vw",
    cursor: "pointer",
    fontSize: "0.83vw",
  },
});

export default function SearchBar() {
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (searchRef.current) {
      const nowSearch = searchRef.current.value;
      console.log(nowSearch);
    }
  };

  return (
    <SearchBarContainer>
      <SearchInput type="text" ref={searchRef} />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </SearchBarContainer>
  );
}
