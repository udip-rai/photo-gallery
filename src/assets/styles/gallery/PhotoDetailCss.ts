import { StyleFunctionProps } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const PhotoDetailCss = (props: StyleFunctionProps) => ({
  flexDirection: "column",
  justifyContent: "center",
  gap: 10,

  ".image-section": {
    justifySelf: "center",
    alignSelf: "center",

    button: {
      boxSize: "30px",
      me: 2,
      bg: mode("#8952e0f0", "maya_blue")(props),
      color: mode("white", "black")(props),
    },
  },

  ".table-section": {
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
    flexDirection: ["column", "column", "column", "row"],

    ".chakra-image": {
      boxSize: "220px",
      objectFit: "cover",
    },

    ".table-header-badge": {
      py: 2,
      px: 4,
      fontSize: "md",
      textTransform: "capitalize",
      bg: mode("#8952e0f0", "maya_blue")(props),
      color: mode("white", "black")(props),
      borderRadius: "12px",
    },
  },
});
