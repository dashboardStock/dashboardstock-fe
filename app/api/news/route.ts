import axios from "axios";

const URL = `https://openapi.naver.com/v1/search/news.json`;
const clientId = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
const clientSecret = process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET;

export const getNews = async ({
  query,
  lastIndex,
}: {
  query: string;
  lastIndex: number;
}) => {
  const response = await axios.get(URL, {
    headers: {
      "X-Naver-Client-Id": clientId,
      "X-Naver-Client-Secret": clientSecret,
    },
    params: {
      query: query,
      display: 4,
      start: lastIndex + 1,
    },
  });

  return response.data;
};
