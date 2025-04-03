import SmallStock from "@/components/SmallStock";
import { styled } from "@styled-system/jsx";

const StockContainer = styled("div", {
  base: {
    maxWidth: "100vw",
    overflow: "hidden",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
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
