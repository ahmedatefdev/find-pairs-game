export const spacing = {
  extraSmall: "0.5em",
  large: "2em",
  normal: "1.5em",
  small: "1em",
  extraLarge: "2.5em"
};

export const lightTheme = {
  body: "#E2E2E2",
  text: "#363537",
  toggleBorder: "#FFF",
  gradient: "linear-gradient(#39598A, #79D7ED)",
  accent: "#1890FF",
  background: "#FAF9F9",
  backgroundSecondary: "#FBFBFB",
  border: "#dcdcdc",
  grey: {
    100: "#F5F7FA",
    500: "#7B8794",
    600: "#616E7C"
  },
  textVers: "#FFFFFF"
};

export const darkTheme = {
  body: "#363537",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  gradient: "linear-gradient(#091236, #1E215D)",
  accent: "#1890FF",
  background: "#050606",
  backgroundSecondary: "#040404",
  border: "#232323",
  grey: {
    100: "#0A0805",
    500: "#84786B",
    600: "#9E9183"
  },
  textVers: "#000000"
};

export const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};
