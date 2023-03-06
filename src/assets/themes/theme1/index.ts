import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import { fonts } from "./fonts";
import { styles } from "./styles";
import { textStyles } from "./textStyles";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const Theme1 = extendTheme({
  config,
  breakpoints: breakpoints,
  fonts: fonts,
  colors: colors,
  styles: styles,
  textStyles: textStyles,
});
