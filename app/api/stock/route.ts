import axios from "axios";

const CONSTANTS = {
  TIME: "TIME_SERIES_INTRADAY", // 실시간
  DAY: "TIME_SERIES_DAILY", // 일일
  MONTH: "TIME_SERIES_MONTHLY", // 월간 -> 연간도 월간으로 요청해서 내가 내야 함..
};

const URL = "https://www.alphavantage.co/query?function=";

interface StockParams {
  time: keyof typeof CONSTANTS;
  symbol: string;
}

interface SymbolParams {
  keyword: string;
}

export const getStock = async ({ time, symbol }: StockParams) => {
  const response = await axios.get(
    `${URL}${CONSTANTS[time]}&symbol=${symbol}&apikey=${process.env.NEXT_PUBLIC_STOCK_KEY}`,
    {
      headers: { "User-Agent": "axios" },
      adapter: "fetch",
      fetchOptions: { cache: "force-cache" },
    }
  );

  return response.data;
};

export const getSymbol = async ({ keyword }: SymbolParams) => {
  const response = await axios.get(
    `${URL}SYMBOL_SEARCH&keywords=${keyword}&apikey=${process.env.NEXT_PUBLIC_STOCK_KEY}`,
    {
      headers: { "User-Agent": "request" },
      adapter: "fetch",
      fetchOptions: { cache: "force-cache" },
    }
  );

  return response.data;
};

export const getIsMarketOpen = async () => {
  const response = await axios.get(
    `${URL}MARKET_STATU&apikey=${process.env.NEXT_PUBLIC_STOCK_KEY}`,
    {
      headers: { "User-Agent": "request" },
    }
  );

  return response.data;
};
