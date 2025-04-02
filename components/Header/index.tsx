import { styled } from "@styled-system/jsx";

const HeaderLayout = styled("header", {
  base: {
    width: "100%",
    height: "3.125vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

const Logo = styled("div", {
  base: {
    width: "17.7vw",
    aspectRatio: "340/30",
    background: "url('/logo.png') no-repeat center",
  },
});

const SearchBar = styled("div", {
  base: {
    width: "64.6vw",
    height: "100%",
    borderRadius: "0.52vw",
    background: "white",
    display: "flex",
    alignItems: "center",
    padding: "0 1vw",
  },
});

const SearchInput = styled("input", {
  base: {
    flex: "1",
    border: "none",
    outline: "none",
    fontSize: "1vw",
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
  },
});

export default function Header() {
  return (
    <HeaderLayout>
      <Logo />
      <SearchBar>
        <SearchInput type="text" />
        <SearchButton>Search</SearchButton>
      </SearchBar>
    </HeaderLayout>
  );
}
