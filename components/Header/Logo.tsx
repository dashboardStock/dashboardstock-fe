"use client";

import useIsMobile from "@/hooks/useIsMobile";
import { styled } from "@styled-system/jsx";
import Image from "next/image";

const LogoLayout = styled("div", {
  base: {
    width: { base: "96.17px", sm: "340px" },
    aspectRatio: { base: "96.17/30", sm: "340/30" },
    position: "relative",
    marginRight: "5px",
  },
});

export default function Logo() {
  const { isMobile } = useIsMobile();
  return (
    <LogoLayout>
      <Image
        src={`/image/${isMobile ? "logoSmall" : "logoBig"}.png`}
        fill
        alt="Logo"
      />
    </LogoLayout>
  );
}
