import { styled } from "@/styled-system/jsx";
import MainNews from "./_components/MainNews";
import SubNews from "./_components/SubNews";

const NewsContainer = styled("div", {
  base: {
    position: "relative",
    width: "100%",
    height: "100%",
    gap: "0.52vw",
    display: "flex",
    flexDirection: "column",
  },
});
const NewsHeader = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    fontSize: "0.83vw",
    fontWeight: "bold",
    color: "gray.500",
    marginBottom: "0.52vw",
  },
});

export default function NewsPage() {
  return (
    <NewsContainer>
      <NewsHeader>주요 뉴스</NewsHeader>

      <MainNews />

      <SubNews />
      <SubNews />
      <SubNews />
    </NewsContainer>
  );
}
