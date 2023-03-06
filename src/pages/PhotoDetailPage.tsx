import { Center, Flex, IconButton, Image } from "@chakra-ui/react";
import { PhotoDetailTable } from "components/gallery/PhotoDetailTable";
import { GrPrevious } from "react-icons/gr";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

export const PhotoDetailPage = () => {
  const params = useParams();
  const photoId = Number(params?.photoId);
  const photos = useSelector((state: any) => state.gallery.photos);
  const filteredPhoto = photos?.filter((item: any) => item?.id === photoId);

  return (
    <Flex className="photo-detail">
      <Center className="image-section">
        <NavLink to="/">
          <IconButton aria-label="Go back" icon={<GrPrevious />} />
          Go back
        </NavLink>
      </Center>

      <Flex className="table-section">
        <Image src="https://via.placeholder.com/600/5e12c6" alt="title" />
        <PhotoDetailTable {...filteredPhoto[0]} />
      </Flex>
    </Flex>
  );
};
