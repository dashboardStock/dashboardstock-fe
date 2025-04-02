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
      {graph}
      {news}
      <div>{children}</div>
    </Layout>
  );
}
