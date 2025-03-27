"use client";

import { CacheProvider } from "@emotion/react";
import styleCache from "../lib/emotion";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <CacheProvider value={styleCache}>{children}</CacheProvider>;
}
