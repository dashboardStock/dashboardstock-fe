"use client";

import { styled } from "@styled-system/jsx";
import { useState } from "react";
import GraphMenu from "@/assets/svg/graphMenu.svg";
import StockMenu from "@/assets/svg/stockMenu.svg";

const NavigationLayout = styled("header", {
  base: {
    width: "100%",
    height: "60px",
    position: "sticky",
    bottom: 0,
    bg: "white",
    display: {
      base: "flex",
      sm: "none",
    },
    flexDir: "column",
  },
});

const ButtonWrapper = styled("div", {
  base: {
    display: "flex",
    width: "100%",
    height: "100%",
  },
});

const MenuButton = styled("button", {
  base: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const SelectorBar = styled("div", {
  base: {
    width: "50%",
    height: "4px",
    bg: "#E6DCF5",
    transition: "transform 0.3s ease",
  },
  variants: {
    position: {
      stock: {
        transform: "translateX(0%)",
      },
      graph: {
        transform: "translateX(100%)",
      },
    },
  },
});

export default function Navigation() {
  const [isStockView, setIsStockView] = useState(false);

  return (
    <NavigationLayout>
      <SelectorBar position={isStockView ? "graph" : "stock"} />
      <ButtonWrapper>
        <MenuButton onClick={() => setIsStockView(false)}>
          <GraphMenu />
        </MenuButton>
        <MenuButton onClick={() => setIsStockView(true)}>
          <StockMenu />
        </MenuButton>
      </ButtonWrapper>
    </NavigationLayout>
  );
}
