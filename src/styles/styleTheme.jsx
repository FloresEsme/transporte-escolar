import { extendTheme } from "@chakra-ui/react";

const colors = {
  yellow: "#FFCA41",
  orange: "#EAA31B",
  white: "#F5F5F5",
  black: "#000000",
  blue: "#7BB9FA",
  darkBlue: "#00154E",
  grey: "#D0D0D0",
  sunset:
    "linear-gradient(180deg, #A9BEDB 63.22%, rgba(235, 221, 181, 0.75) 92.83%)",
};

const fontWeights = {
  extrabold: 900,
};

const shadows = {
  mainShadow: `3px 3px 4px ${colors.black}`,
};

const fonts = {
  heading: `'Monofett', sans-serif`,
  body: `'Livvic', sans-serif`,
};

const theme = extendTheme({ colors, fonts, fontWeights, shadows });

export default theme; // Export the theme as the default export
