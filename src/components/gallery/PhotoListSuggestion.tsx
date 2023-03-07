import { Box, Text } from "@chakra-ui/react";
import {
  PhotoListSuggestionProps,
  TitleAndIdState,
} from "schemas/PhotoListSchema";

export const PhotoListSuggestion = (props: PhotoListSuggestionProps) => {
  const { sgRef, isComponentVisible, setSelectedTitle, suggestion } = props;

  return (
    <>
      {isComponentVisible && (
        <Box className="photolist-suggestion scrollbar1" ref={sgRef}>
          {suggestion?.length > 0 ? (
            <>
              {suggestion?.slice(0, 50).map((item: TitleAndIdState) => (
                <Text
                  key={item?.id}
                  noOfLines={1}
                  onClick={() =>
                    setSelectedTitle({ id: item?.id, title: item?.title })
                  }
                >
                  {item?.title}
                </Text>
              ))}
            </>
          ) : (
            <Text>No photo title found.</Text>
          )}
        </Box>
      )}
    </>
  );
};
