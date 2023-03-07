import { StyleFunctionProps } from "@chakra-ui/react";
import { body } from "assets/styles/BaseCss";
import { galleryHeader, gridCards, scrollbar1 } from "assets/styles/CommonCss";
import { PhotoDetailCss } from "assets/styles/gallery/PhotoDetailCss";
import { PhotoListCss } from "assets/styles/gallery/PhotoListCss";
import { Layout1Css } from "assets/styles/Layout1Css";

export const styles = {
  global: (props: StyleFunctionProps) => ({
    // Base CSS
    body: body,

    // Layout CSS
    ".layout1": Layout1Css,

    // Common CSS
    ".grid-cards": gridCards,
    ".gallery-header": galleryHeader,
    ".scrollbar1": scrollbar1,

    // Gallery CSS
    ".photo-list": PhotoListCss(props),
    ".photo-detail": PhotoDetailCss(props),
  }),
};
