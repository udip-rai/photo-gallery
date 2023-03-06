import { Box, Input } from "@chakra-ui/react";
import { SinglePhotoProps } from "schemas/PhotoDetailSchema";

export type PhotosProps = {
  photos: SinglePhotoProps[];
};

// export KeyboardEvent1 =

export const PhotoListSearchbar = (props: PhotosProps) => {
  const { photos } = props;
  console.log(photos);
  return (
    <Box boxSize="150px">
      {/* <Input type="text" onKeyPress={(e:) => handleKeyPress}/> */}
    </Box>
  );
};
