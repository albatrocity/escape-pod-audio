import Typography from "typography";
import stAnnesTheme from "typography-theme-st-annes";
stAnnesTheme.headerFontFamily = ["Maven Pro", "Helvetica", "Arial"];
stAnnesTheme.bodyFontFamily = ["Source Sans Pro"];
stAnnesTheme.googleFonts = [
  {
    name: "Maven Pro",
    styles: ["700"]
  },
  {
    name: "Source Sans Pro",
    styles: ["400"]
  }
];
stAnnesTheme.bodyColor = "hsla(248,45%,24%, 1)";
stAnnesTheme.bodyGray = 40;
stAnnesTheme.headerColor = "hsla(248,45%,24%, 1)";
stAnnesTheme.overrideStyles = (
  { adjustFontSizeTo, scale, rhythm },
  options
) => ({
  a: {
    color: "#ff3161",
    textDecoration: "none"
  }
});
const typography = new Typography(stAnnesTheme);

export default typography;
