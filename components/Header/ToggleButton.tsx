"use client";

import { useState } from "react";
import { styled } from "@/styled-system/jsx";

const ToggleContainer = styled("div", {
  base: {
    display: "flex",
    borderRadius: { base: "5px", sm: "0.5vw" },
    overflow: "hidden",
    backgroundColor: "gray.400",
    width: { base: "110px", sm: "6.35vw" },
    aspectRatio: { base: "110/30", sm: "122/40" },
    position: "relative",
    cursor: "pointer",
  },
});

const Toggle = styled("div", {
  base: {
    position: "absolute",
    width: "50%",
    height: "100%",
    backgroundColor: "#6536ff",
    borderRadius: { base: "5px", sm: "0.5vw" },
    transition: "transform 0.3s ease-in-out",
  },
  variants: {
    active: {
      false: { transform: "translateX(0)" },
      true: { transform: "translateX(100%)" },
    },
  },
});

const ToggleLabel = styled("span", {
  base: {
    flex: "1",
    textAlign: "center",
    fontSize: { base: "14px", sm: "0.83vw" },
    color: "white",
    zIndex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function ToggleButton() {
  const [active, setActive] = useState(false);

  return (
    <ToggleContainer onClick={() => setActive(!active)}>
      <Toggle active={active} />
      <ToggleLabel>국내</ToggleLabel>
      <ToggleLabel>해외</ToggleLabel>
    </ToggleContainer>
  );
}
