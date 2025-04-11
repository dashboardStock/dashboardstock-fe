import SmallStock from "@/components/SmallStock";
import { styled } from "@styled-system/jsx";

const StockContainer = styled("div", {
  base: {
    maxWidth: "100vw",
    background: "#f7f9ff",
    overflow: "hidden",
    justifyContent: "space-between",
    flexWrap: "wrap",
    display: "flex",
    flexDirection: {
      base: "column",
      sm: "row",
    },
    gap: { base: "10px", sm: "0" },
    alignItems: {
      base: "center",
      sm: "start",
    },
  },
});

export default function Dashboard() {
  return (
    <StockContainer>
      <SmallStock />
      <SmallStock />
      <SmallStock />
    </StockContainer>
  );
}
