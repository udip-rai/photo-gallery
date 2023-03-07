import { SinglePhotoType } from "./PhotoDetailSchema";

export type PhotoListCardFlexProps = {
  id: number;
  url: string;
  title: string;
};

export type TitleAndIdState = {
  id: number;
  title: string;
};

export type selectedTitleState = {
  id: number;
  title: string;
};

export type PhotosProps = {
  photos?: SinglePhotoType[];
};

export type PhotoListSuggestionProps = {
  sgRef: any;
  isComponentVisible: boolean;
  setSelectedTitle: (value: selectedTitleState) => void;
  suggestion: any;
};
