import { Box, Center, Grid } from "@chakra-ui/react";
import { PhotoListCardFlex, PhotoListSearchbar } from "components/gallery";
import { usePaginatedItems } from "hooks/usePaginatedItems";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import { getPhotos } from "redux/gallery/galleryState";
import { SinglePhotoProps } from "schemas/PhotoDetailSchema";

export const PhotoListPage = () => {
  const dispatch: any = useDispatch();
  const photos = useSelector((state: any) => state.gallery.photos);
  const { currentItems, pageCount, handlePageClick } = usePaginatedItems(
    photos,
    10
  );

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  return (
    <Box className="photo-list ">
      <PhotoListSearchbar photos={photos} />
      <Grid className="grid-cards" justifyContent="center">
        {currentItems?.map((item: SinglePhotoProps) => {
          const id = item?.id,
            title = item?.title,
            url = item?.thumbnailUrl,
            cardProps = { id, title, url };
          return <PhotoListCardFlex key={item?.id} {...cardProps} />;
        })}
      </Grid>
      <Center className="photo-paginate">
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          // renderOnZeroPageCount={null}
        />
      </Center>
    </Box>
  );
};
