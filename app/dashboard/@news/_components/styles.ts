import { styled } from "@styled-system/jsx";

export const NewsSource = styled("span", {
  base: {
    fontSize: { base: "12px", sm: "16px" },
    fontWeight: "semibold",
    color: "gray.500",
  },
});

export const NewsDate = styled("span", {
  base: {
    color: "#555555",
    fontSize: { base: "10px", sm: "14px" },
  },
});

export const Line = styled("div", {
  base: {
    width: "100%",
    height: "1px",
    backgroundColor: "#E6DCF5",
  },
});
