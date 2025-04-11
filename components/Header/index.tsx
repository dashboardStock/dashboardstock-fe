import { styled } from "@styled-system/jsx";
import ToggleButton from "./ToggleButton";
import SearchBar from "./SearchBar";
import Logo from "./Logo";

const HeaderLayout = styled("header", {
  base: {
    width: "100%",
    display: "flex",
    alignItems: { base: "start", sm: "center" },
    justifyContent: "space-between",
    marginBottom: { base: "10px", sm: "2vw" },
  },
});

const NonLogo = styled("div", {
  base: {
    width: "100%",
    display: "flex",
    flexDirection: { base: "column", sm: "row" },
    alignItems: { base: "end", sm: "center" },
    gap: { base: "10px", sm: "2.55vw" },
  },
});

export default function Header() {
  return (
    <HeaderLayout>
      <Logo />
      <NonLogo>
        <SearchBar />
        <ToggleButton />
      </NonLogo>
    </HeaderLayout>
  );
}
