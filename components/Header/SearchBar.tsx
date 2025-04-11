"use client";

import useIsMobile from "@/hooks/useIsMobile";
import { styled } from "@styled-system/jsx";
import { useRef } from "react";

const SearchBarContainer = styled("div", {
  base: {
    width: { base: "223px", sm: "64.6vw" },
    height: { base: "40px", sm: "100%" },
    borderRadius: { base: "7px", sm: "0.52vw" },
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
    fontSize: "16px",
    padding: "10px",
  },
});

const SearchButton = styled("button", {
  base: {
    color: "white",
    width: { base: "30px", sm: "" },
    backgroundColor: "#6536ff",
    height: { base: "30px", sm: "100%" },
    borderRadius: { base: "5px", sm: "0.52vw" },
    border: "none",
    padding: { base: "0", sm: "0 1vw" },
    cursor: "pointer",
    fontSize: "0.83vw",
  },
});

export default function SearchBar() {
  const { isMobile } = useIsMobile();
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (searchRef.current) {
      const nowSearch = searchRef.current.value;
      console.log(nowSearch);
    }
  };

  return (
    <SearchBarContainer>
      <SearchInput type="text" ref={searchRef} placeholder="Search for stock" />
      <SearchButton onClick={handleSearch}>
        {isMobile ? "svg" : "Search"}
      </SearchButton>
    </SearchBarContainer>
  );
}
