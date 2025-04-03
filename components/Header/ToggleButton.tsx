"use client";

import { useState } from "react";
import { styled } from "@/styled-system/jsx";

const ToggleContainer = styled("div", {
  base: {
    display: "flex",
    borderRadius: "0.5vw",
    overflow: "hidden",
    backgroundColor: "gray.400",
    width: "6.35vw",
    aspectRatio: "122/40",
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
    borderRadius: "0.5vw",
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
    lineHeight: "2.08vw",
    fontSize: "0.83vw",
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
