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
    fontSize: "24px",
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
    fontSize: "14px",
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

export default function MainNews({ data }: { data: unknown }) {
  return (
    <a href={data.originalLink} target="_blank">
      <MainNewsLayout>
        <MainNewsThumbnail />
        <MainNewsText>
          <MainNewsHead>
            <NewsSource>{data.source}</NewsSource>
            <NewsDate>{data.date}</NewsDate>
          </MainNewsHead>
          <MainNewsTitle>{data.title}</MainNewsTitle>
          <MainNewsDescription>{data.description}</MainNewsDescription>
        </MainNewsText>
      </MainNewsLayout>
      <Line />
    </a>
  );
}
