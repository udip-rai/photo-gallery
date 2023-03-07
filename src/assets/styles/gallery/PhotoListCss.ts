import { StyleFunctionProps } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const PhotoListCss = (props: StyleFunctionProps) => ({
  ".photo-functions": {
    px: "25px",
    pb: 2,
    justifyContent: ["center", "center", "center", "space-between"],
    flexDirection: ["column", "column", "column", "row"],
    gap: 3,
  },

  ".photo-paginate": {
    gap: 3,
    ul: {
      listStyleType: "none",
      display: "flex",
      gap: "25px",
    },
    li: {
      ":first-of-type, :last-of-type": {
        bg: "transparent",
        color: mode("black", "white")(props),
      },
      bg: mode("#8952e0f0", "maya_blue")(props),
      color: mode("white", "black")(props),
      gap: 2,
      minWidth: "30px",
      height: "30px",
      padding: "5px",
      borderRadius: "5px",
      textAlign: "center",
    },
  },

  ".photolist-suggestion": {
    pos: "absolute",
    w: "250px",
    h: "fit-content",
    maxH: "250px",
    p: 2,
    overflowY: "scroll",
    bg: mode("#8952e0f0", "maya_blue")(props),
    color: mode("white", "black")(props),
    borderBottomRadius: "10px",
  },

  ".photo-button": {
    w: "100px",
    bg: mode("#8952e0f0", "maya_blue")(props),
    color: mode("white", "black")(props),
  },
});
