import { styled } from "@/styled-system/jsx";
import SubNews from "./_components/SubNews";
import FirstNews from "./_components/FirstNews";

const NewsContainer = styled("div", {
  base: {
    width: "100%",
    position: "relative",
    gap: "0.52vw",
    maxHeight: "100%",
    display: "flex",
    flexDirection: "column",
    background: "white",
    "&:hover": { outline: "1px solid #eaeaea" },
    borderRadius: "10px",
    padding: "10px",
    boxSizing: "border-box",
  },
});

const ScrollArea = styled("div", {
  base: {
    overflowY: "overlay",

    // ✅ 전역 스크롤 숨김 스타일을 무력화하고 새 스타일 적용
    "&::-webkit-scrollbar": {
      display: "block !important",
      width: "5px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#888888",
      borderRadius: "3px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
    },
    scrollbarWidth: "thin",
    scrollbarColor: "#888888 transparent",
  },
});

const NewsHeader = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    fontSize: "12px",
    color: "gray.500",
    marginBottom: "0.52vw",
  },
});

const MoreButton = styled("button", {
  base: {
    width: "100%",
    fontSize: "16px",
    color: "#6536FF",
    display: { base: "flex", sm: "none" },
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
  },
});

export default function NewsPage() {
  //1.originalLink에서 oid 따서 매핑된 뉴스 이름 찾아야 함
  //2.pubDate를 현재 시간으로부터 얼마나 이전인지 교체해주는 함수 거쳐야 함
  const dummyData = [
    {
      title: "금감원, '코스피 먹통' 한국거래소 전산장애 살펴본다",
      originalLink: "https://test.com",
      source: "연합뉴스",
      date: "23분전",
      description: "26일 금융투자협회에 따르면 지난 22일 상장지수펀드(ETF)..",
      pubDate: "Mon, 26 Sep 2016 07:50:00 +0900",
    },
    {
      title: "금감원, '코스피 먹통' 한국거래소 전산장애 살펴본다",
      originalLink: "https://test.com",
      source: "연합뉴스",
      date: "23분전",
      description: "26일 금융투자협회에 따르면 지난 22일 상장지수펀드(ETF)..",
      pubDate: "Mon, 26 Sep 2016 07:50:00 +0900",
    },
    {
      title: "금감원, '코스피 먹통' 한국거래소 전산장애 살펴본다",
      originalLink: "https://test.com",
      date: "23분전",
      description: "26일 금융투자협회에 따르면 지난 22일 상장지수펀드(ETF)..",
      source: "연합뉴스",
      pubDate: "Mon, 26 Sep 2016 07:50:00 +0900",
    },
    {
      title: "금감원, '코스피 먹통' 한국거래소 전산장애 살펴본다",
      originalLink: "https://test.com",
      date: "23분전",
      description: "26일 금융투자협회에 따르면 지난 22일 상장지수펀드(ETF)..",
      source: "연합뉴스",
      pubDate: "Mon, 26 Sep 2016 07:50:00 +0900",
    },
  ];

  return (
    <NewsContainer>
      <ScrollArea>
        <NewsHeader>주요 뉴스</NewsHeader>

        {dummyData.map((data, index) => {
          if (index === 0) return <FirstNews data={data} key={index} />;
          else return <SubNews data={data} key={index} />;
        })}
      </ScrollArea>
      <MoreButton>+더보기</MoreButton>
    </NewsContainer>
  );
}
