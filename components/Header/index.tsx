import { styled } from "@styled-system/jsx";
import Image from "next/image";
import ToggleButton from "./ToggleButton";
import SearchBar from "./SearchBar";

const HeaderLayout = styled("header", {
  base: {
    width: "100%",
    height: "3.125vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "40px",
  },
});

const Logo = styled("div", {
  base: {
    width: "17.7vw",
    aspectRatio: "340/30",
    position: "relative",
  },
});

export default function Header() {
  return (
    <HeaderLayout>
      <Logo>
        <Image src="/image/logo.png" fill alt="Logo" />
      </Logo>
      <SearchBar />
      <ToggleButton />
    </HeaderLayout>
  );
}
