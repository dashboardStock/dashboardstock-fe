import { styled } from "@styled-system/jsx";

const NavigationLayout = styled("header", {
  base: {
    width: "100%",
    height: "60px",
    alignItems: "center",
    justifyContent: "space-between",
    position: "sticky",
    bottom: 0,
    backgroundColor: "white",
    display: {
      base: "flex",
      sm: "none",
    },
  },
});

export default function Navigation() {
  return (
    <NavigationLayout>
      <button>1</button>
      <button>2</button>
    </NavigationLayout>
  );
}
