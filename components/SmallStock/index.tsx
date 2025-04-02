import styled from "@emotion/styled";
import Image from "next/image";

const SmallStockLayout = styled.div`
  padding: 20px;
  box-sizing: border-box;
  background-color: white;
  border-radius: 10px;
  width: 587px;
  aspect-ratio: 587 / 150;

  display: flex;
  align-items: center;
`;

const SmallStockText = styled.div<{ isRise: boolean }>`
  display: flex;
  h3 {
    font-weight: 600;
    color: #555555;
    font-size: 20px;
  }

  div {
    width: 100%;
    justify-content: space-between;
    span:first-of-type {
      font-size: 32px;
      color: #252525;
    }

    span:last-of-type {
      color: ${({ isRise }) => (isRise ? "red" : "blue")};
    }
  }
`;

export default function SmallStock() {
  const isRise = true;

  return (
    <SmallStockLayout>
      <Image
        src="/image/testLogo.png"
        width={110}
        height={110}
        alt="stock logo"
      />
      <SmallStockText isRise={isRise}>
        <h3>한국조선해양</h3>
        <div>
          <span>213,500</span>
          <span>
            {isRise ? "+" : "-"} 4,000 (1.9%) {isRise ? "▲" : "▼"} 오늘
          </span>
        </div>
      </SmallStockText>
    </SmallStockLayout>
  );
}
