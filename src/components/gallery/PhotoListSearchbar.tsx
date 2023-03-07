import { Box, Button, Flex, Input, useToast } from "@chakra-ui/react";
import { useComponentVisible } from "hooks/useComponentVisible";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SinglePhotoType } from "schemas/PhotoDetailSchema";
import {
  PhotosProps,
  selectedTitleState,
  TitleAndIdState,
} from "schemas/PhotoListSchema";
import { INVALID_SEARCH, VALID_SEARCH } from "utils/logic/constants";
import { PhotoListSuggestion } from "./PhotoListSuggestion";

// export KeyboardEvent1 =

export const PhotoListSearchbar = (props: PhotosProps) => {
  const { photos } = props;
  const navigate = useNavigate();
  const toast = useToast();

  // To hide the suggestion box when the user clicks outside it
  const { sgRef, setIsComponentVisible, isComponentVisible } =
    useComponentVisible(false);

  // Debounce Concept with timer & setTimer
  const [timer, setTimer] = useState<any>(null);

  // Suggestion Box for search
  const [suggestion, setSuggestion] = useState<TitleAndIdState[]>();

  // In case the user selects a particular suggestion
  const [selectedTitle, setSelectedTitle] = useState<selectedTitleState>();

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setIsComponentVisible(true);

    const value = e?.currentTarget?.value;

    if (timer) {
      clearTimeout(timer);
      setTimer(null);
    }

    // Debounced here
    setTimer(setTimeout(() => handleMain(value), 500));

    const handleMain = (value: string) => {
      // Filter the title & id to display in suggestion box
      const allTitlesAndID: any = [];

      photos?.map((item: SinglePhotoType, i: number) =>
        allTitlesAndID.push({ id: item?.id, title: item?.title })
      );

      const filtered = allTitlesAndID?.filter(
        (item: TitleAndIdState) =>
          item.title?.slice(0, value.length).toLowerCase() ===
          value.toLowerCase()
      );

      setSuggestion(filtered);

      if (e.key === "Enter") {
        findPhotoDetail();
      }
    };
  };

  const handleSelectedTitleClick = () => {
    findPhotoDetail();
  };

  const findPhotoDetail = () => {
    if (typeof selectedTitle?.id !== "undefined") {
      toast(VALID_SEARCH);
      navigate("/photo-detail/" + selectedTitle?.id);
    } else {
      toast(INVALID_SEARCH);
    }
  };

  const photoListSuggestionProps = {
    sgRef,
    isComponentVisible,
    suggestion,
    setSelectedTitle,
  };

  return (
    <Box pos="relative">
      <Flex gap={2}>
        <Input
          placeholder="Enter title.."
          w="250px"
          key={selectedTitle?.id}
          defaultValue={selectedTitle?.title}
          type="text"
          onClick={() => setIsComponentVisible(true)}
          onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyUp(e)}
        />
        <Button className="photo-button" onClick={handleSelectedTitleClick}>
          Search
        </Button>
      </Flex>

      <PhotoListSuggestion {...photoListSuggestionProps} />
    </Box>
  );
};
