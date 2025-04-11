import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { styled } from "@styled-system/jsx";

const Layout = styled("div", {
  base: { width: "100vw", height: "100vh", position: "relative" },
});

const Main = styled("main", {
  base: {
    boxSizing: "border-box",
    padding: {
      base: "2.87vw 2.6vw 2.08vw 2.6vw",
      sm: "15px",
    },
    background: "#f7f9ff",
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
    width: "100vw",
  },
});

const GraphContainer = styled("div", {
  base: {
    aspectRatio: "970/720",
    width: { base: "100%", sm: "50.52vw" },
    height: "auto",
    boxSizing: "border-box",
    padding: "2vw",
    background: "white",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": { outline: "1px solid #eaeaea" },
    flex: 1,
  },
});

const NewsContainer = styled("div", {
  base: {
    flex: 1,
    aspectRatio: { base: "auto", sm: "820/720" },
    boxSizing: "border-box",
    overflow: "hidden",
    width: { base: "100%", sm: "42.7vw" },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
const Containers = styled("div", {
  base: {
    height: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch",
    gap: "15px",
    marginBottom: "15px",
    flexDirection: {
      base: "column",
      sm: "row",
    },
  },
});

export default function DashboardMain({
  children,
  graph,
  news,
}: Readonly<{
  children: React.ReactNode;
  graph: React.ReactNode;
  news: React.ReactNode;
}>) {
  return (
    <Layout>
      <Main>
        <Header />
        <Containers>
          <GraphContainer>{graph}</GraphContainer>
          <NewsContainer>{news}</NewsContainer>
        </Containers>
        {children}
      </Main>
      <Navigation />
    </Layout>
  );
}
