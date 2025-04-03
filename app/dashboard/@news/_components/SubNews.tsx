import { styled } from "@/styled-system/jsx";
import { Line, NewsDate, NewsSource } from "./styles";

const SubNewsLayout = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    gap: "1.5vw",
  },
});

const SubNewsThumbnail = styled("div", {
  base: {
    width: "5.2vw",
    aspectRatio: "1",
    backgroundColor: "gray.300",
    borderRadius: "0.26vw",
  },
});

const SubNewsText = styled("div", {
  base: {
    flex: 1,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    cursor: "pointer",
  },
});

const NewsSubTitle = styled("p", {
  base: {
    fontSize: "0.83vw",
    color: "#222",
  },
});

export default function SubNews() {
  return (
    <>
      <SubNewsLayout>
        <SubNewsThumbnail />
        <SubNewsText>
          <NewsSource>연합뉴스</NewsSource>
          <NewsSubTitle>
            금감원, &apos;코스피 먹통&apos; 한국거래소 전산장애 살펴본다
          </NewsSubTitle>
          <NewsDate>23분전</NewsDate>
        </SubNewsText>
      </SubNewsLayout>
      <Line />
    </>
  );
}
