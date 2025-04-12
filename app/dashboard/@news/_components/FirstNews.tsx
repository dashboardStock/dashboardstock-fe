"use client";

import useIsMobile from "@/hooks/useIsMobile";
import MainNews from "./MainNews";
import SubNews from "./SubNews";

export default function FirstNews({ data }: { data: unknown }) {
  const { isMobile } = useIsMobile();

  return isMobile ? <SubNews data={data} /> : <MainNews data={data} />;
}
