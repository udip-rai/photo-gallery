import { Center, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { PhotoListCardFlexProps } from "schemas/PhotoListSchema";

export const PhotoListCardFlex = (props: PhotoListCardFlexProps) => {
  const { id, title, url } = props;
  return (
    <Center className="card-flex">
      <NavLink to={`photo-detail/${id}`}>
        <Image src={url} alt={title} boxSize="120px" />
      </NavLink>
    </Center>
  );
};
