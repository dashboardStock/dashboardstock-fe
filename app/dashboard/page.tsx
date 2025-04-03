import SmallStock from "@/components/SmallStock";
import { styled } from "@styled-system/jsx";

const StockContainer = styled("div", {
  base: {
    width: "100vw",
    display: "flex",
    gap: "1.56vw",
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
