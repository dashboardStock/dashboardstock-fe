"use client";

import useIsMobile from "@/hooks/useIsMobile";
import { styled } from "@styled-system/jsx";
import { useRef } from "react";
import Search from "@/assets/svg/search.svg";

const SearchBarContainer = styled("div", {
  base: {
    width: { base: "100%", sm: "64.6vw" },
    height: { base: "40px", sm: "60px" },
    borderRadius: { base: "7px", sm: "10px" },
    background: "white",
    display: "flex",
    alignItems: "center",
    padding: "10px",
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
    width: { base: "30px", sm: "100px" },
    height: { base: "30px", sm: "100%" },
    backgroundColor: "#6536ff",
    borderRadius: { base: "5px", sm: "10px" },
    border: "none",
    padding: { base: "0", sm: "0 1vw" },
    cursor: "pointer",
    fontSize: "16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
      <SearchInput
        type="text"
        ref={searchRef}
        placeholder={isMobile ? "Search for stock" : ""}
      />
      <SearchButton onClick={handleSearch}>
        {isMobile ? <Search /> : "Search"}
      </SearchButton>
    </SearchBarContainer>
  );
}
