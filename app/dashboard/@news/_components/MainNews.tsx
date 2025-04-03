import { styled } from "@styled-system/jsx";
import { Line, NewsDate, NewsSource } from "./styles";

const MainNewsThumbnail = styled("div", {
  base: {
    width: "20.1vw",
    aspectRatio: "386/200",
    backgroundColor: "gray.300",
    borderRadius: "0.52vw",
    marginBottom: "0.73vw",
    cursor: "pointer",
  },
});

const MainNewsTitle = styled("h3", {
  base: {
    fontSize: "1.04vw",
    fontWeight: "bold",
    color: "#222",
    marginBottom: "0.52vw",
    cursor: "pointer",
    gridArea: "bottom",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

const MainNewsDescription = styled("p", {
  base: {
    color: "#555555",
    fontSize: "0.73vw",
    marginTop: "1.3vw",
    marginBottom: "1.04vw",
    gridArea: "bottom2",
  },
});

const MainNewsText = styled("div", {
  base: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    cursor: "pointer",
  },
});

const MainNewsLayout = styled("div", {
  base: {
    display: "flex",
    gap: "1.56vw",
  },
});

const MainNewsHead = styled("div", {
  base: {
    display: "flex",
    justifyContent: "space-between",
  },
});

export default function MainNews() {
  return (
    <>
      <MainNewsLayout>
        <MainNewsThumbnail />
        <MainNewsText>
          <MainNewsHead>
            <NewsSource>네이트 뉴스</NewsSource>
            <NewsDate>23분전</NewsDate>
          </MainNewsHead>
          <MainNewsTitle>
            코스피 전체거래 먹통에…금감원, 거래소 검사 검토
          </MainNewsTitle>
          <MainNewsDescription>
            금융감독이 최근 유가증권시장(코스피) 먹통을 일으킨 한국거래소의
            설적성에 주시하고 있다. 증권업계 최고가 특정 전제 거래가 …
          </MainNewsDescription>
        </MainNewsText>
      </MainNewsLayout>
      <Line />
    </>
  );
}
