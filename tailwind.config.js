const sfText = [
  "-apple-system",
  "BlinkMacSystemFont",
  "SF Pro Text",
  "Helvetica Neue",
  "Helvetica",
  "Arial",
  "sans-serif",
]

const sfDisplay = [
  "-apple-system",
  "BlinkMacSystemFont",
  "SF Pro Display",
  "Helvetica Neue",
  "Helvetica",
  "Arial",
  "sans-serif",
]

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    // Mirrors the small (<=734), medium (735-1068) and large (>=1069) viewports
    screens: {
      md: "735px",
      lg: "1069px",
      xl: "1441px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      ink: "#1d1d1f",
      inkSoft: "#424245",
      secondary: "#6e6e73",
      tertiary: "#86868b",
      hairline: "#d2d2d7",
      mist: "#f5f5f7",
      cloud: "#e8e8ed",
      graphite: "#161617",
      graphiteLight: "#272729",
      link: "#0066cc",
      linkDark: "#2997ff",
      accent: "#0071e3",
      accentHover: "#0076df",
      accentActive: "#006edb",
    },
    fontFamily: {
      sans: sfText,
      display: sfDisplay,
    },
    extend: {
      borderRadius: {
        tile: "18px",
        pill: "980px",
      },
      maxWidth: {
        content: "980px",
        nav: "1024px",
        reading: "692px",
      },
    },
  },
  plugins: [],
}
