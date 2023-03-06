import { StyleFunctionProps } from "@chakra-ui/react";
import { body } from "assets/styles/BaseCss";
import { PhotoDetailCss } from "assets/styles/gallery/PhotoDetailCss";
import { PhotoListCss } from "assets/styles/gallery/PhotoListCss";
import { Layout1Css } from "assets/styles/Layout1Css";

export const styles = {
  global: (props: StyleFunctionProps) => ({
    body: body,
    ".layout1": Layout1Css,
    ".photo-list": PhotoListCss(props),
    ".photo-detail": PhotoDetailCss(props),
  }),
};
