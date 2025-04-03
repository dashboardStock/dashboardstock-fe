import Header from "@/components/Header";
import { styled } from "@styled-system/jsx";

const Layout = styled("div", {
  base: {
    width: "100vw",
    height: "100vh",
    boxSizing: "border-box",
    padding: "2.87vw 2.6vw 2.08vw 2.6vw",
    background: "#f7f9ff",
    display: "flex",
    flexDirection: "column",
  },
});

const GraphContainer = styled("div", {
  base: {
    width: "50.52vw",
    aspectRatio: "970/720",
    boxSizing: "border-box",
    padding: "2vw",
    background: "white",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": { outline: "1px solid #eaeaea" },
  },
});

const NewsContainer = styled("div", {
  base: {
    width: "42.7vw",
    aspectRatio: "820/720",
    boxSizing: "border-box",
    padding: "2vw",
    background: "white",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": { outline: "1px solid #eaeaea" },
  },
});

const Containers = styled("div", {
  base: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1.56vw",
    marginBottom: "1.56vw",
  },
});

export default function DashboardLayout({
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
      <Header />
      <Containers>
        <GraphContainer>{graph}</GraphContainer>
        <NewsContainer>{news}</NewsContainer>
      </Containers>
      {children}
    </Layout>
  );
}
