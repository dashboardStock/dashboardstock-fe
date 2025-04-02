import Image from "next/image";
import { css } from "@/styled-system/css";

const smallStockStyle = css({
  padding: "20px",
  boxSizing: "border-box",
  backgroundColor: "white",
  borderRadius: "10px",
  width: "587px",
  aspectRatio: "587 / 150",
  display: "flex",
  alignItems: "center",

  "& img": {
    width: "110px",
    height: "110px",
  },

  "& > div": {
    display: "flex",
    flexDirection: "column",
    marginLeft: "16px",

    "& h3": {
      fontSize: "20px",
      fontWeight: "600",
      color: "#555",
    },

    "& div": {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      "& span:first-of-type": {
        fontSize: "32px",
        fontWeight: "bold",
        color: "#252525",
      },

      "& span:last-of-type": {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
  },
});

const changeStyle = (isRise: boolean) =>
  css({
    color: isRise ? "red.500" : "blue.500",
  });

export default function SmallStock() {
  const isRise = true;

  return (
    <div className={smallStockStyle}>
      <Image
        src="/image/testLogo.png"
        width={110}
        height={110}
        alt="stock logo"
      />
      <div>
        <h3>한국조선해양</h3>
        <div>
          <span>213,500</span>
          <span className={changeStyle(isRise)}>
            {isRise ? "+" : "-"} 4,000 (1.9%) {isRise ? "▲" : "▼"} 오늘
          </span>
        </div>
      </div>
    </div>
  );
}
