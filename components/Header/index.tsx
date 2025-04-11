import { styled } from "@styled-system/jsx";
import Image from "next/image";
import ToggleButton from "./ToggleButton";
import SearchBar from "./SearchBar";

const HeaderLayout = styled("header", {
  base: {
    width: "100%",
    height: { base: "auto", sm: "3.125vw" },
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: { base: "10px", sm: "2vw" },
  },
});

const Logo = styled("div", {
  base: {
    width: { base: "96.17px", sm: "17.7vw" },
    aspectRatio: { base: "96.17/30", sm: "340/30" },
    position: "relative",
  },
});

const NonLogo = styled("div", {
  base: {
    display: "flex",
    flexDirection: { base: "column", sm: "row" },
    alignItems: { base: "end", sm: "center" },
    gap: { base: "10px", sm: "2.55vw" },
  },
});

export default function Header() {
  return (
    <HeaderLayout>
      <Logo>
        <Image src="/image/logo.png" fill alt="Logo" />
      </Logo>
      <NonLogo>
        <SearchBar />
        <ToggleButton />
      </NonLogo>
    </HeaderLayout>
  );
}
