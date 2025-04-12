import { styled } from "@/styled-system/jsx";
import { Line, NewsDate, NewsSource } from "./styles";

const SubNewsLayout = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    gap: "1.5vw",
    padding: { base: "10px 0px" },
  },
});

const SubNewsThumbnail = styled("div", {
  base: {
    width: { base: "80px", sm: "100px" },
    aspectRatio: "1",
    backgroundColor: "gray.300",
    borderRadius: "5px",
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
    gap: "10px",
  },
});

const NewsSubTitle = styled("p", {
  base: {
    fontSize: "14px",
    fontWeight: "semibold",
    color: "#222",
  },
});

export default function SubNews({ data }: { data: unknown }) {
  return (
    <a href={data.originalLink} target="_blank">
      <SubNewsLayout>
        <SubNewsThumbnail />
        <SubNewsText>
          <NewsSource>{data.source}</NewsSource>
          <NewsSubTitle>{data.title}</NewsSubTitle>
          <NewsDate>{data.date}</NewsDate>
        </SubNewsText>
      </SubNewsLayout>
      <Line />
    </a>
  );
}
