import Image from "next/image";
import { styled } from "@/styled-system/jsx";

const SmallStockContainer = styled("div", {
  base: {
    padding: "10px",
    boxSizing: "border-box",
    backgroundColor: "white",
    borderRadius: "10px",
    width: { sm: "30.57vw", base: "100%" },
    minHeight: "80px",
    display: "flex",
    alignItems: "center",
    "&:hover": { outline: "1px solid #eaeaea" },
  },
});

const StockImageWrapper = styled("div", {
  base: {
    width: { base: "60px", sm: "70px" },
    aspectRatio: "1",
  },
});

const StockInfo = styled("div", {
  base: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    marginLeft: "20px",
  },
});

const StockTitle = styled("h3", {
  base: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#555",
  },
});

const StockDetails = styled("div", {
  base: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const StockPrice = styled("span", {
  base: {
    fontSize: "20px",
    fontWeight: "semibold",
    color: "#252525",
  },
});

const StockChange = styled("span", {
  base: {
    fontSize: "12px",
  },
  variants: {
    isRise: {
      true: { color: "red.500" },
      false: { color: "blue.500" },
    },
  },
});

export default function SmallStock() {
  const isRise = true;

  return (
    <SmallStockContainer>
      <StockImageWrapper>
        <Image
          src="/image/testLogo.png"
          width={110}
          height={110}
          alt="stock logo"
        />
      </StockImageWrapper>
      <StockInfo>
        <StockTitle>한국조선해양</StockTitle>
        <StockDetails>
          <StockPrice>213,500</StockPrice>
          <StockChange isRise={isRise}>
            {isRise ? "+" : "-"} 4,000 (1.9%) {isRise ? "▲" : "▼"} 오늘
          </StockChange>
        </StockDetails>
      </StockInfo>
    </SmallStockContainer>
  );
}
