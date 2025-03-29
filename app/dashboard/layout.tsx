"use client";

import Header from "@/components/Header";
import styled from "@emotion/styled";

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 2.87vw 2.6vw 2.08vw 2.6vw;
  background: #f7f9ff;
`;

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
