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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>
      <Header />
      <div>{children}</div>
    </Layout>
  );
}
