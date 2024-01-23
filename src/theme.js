// import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// extend the theme
const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#6с6с6с",
      700: "#202020",
      800: "#121212",
      900: "#111",
    },
  },
});

export default theme;
