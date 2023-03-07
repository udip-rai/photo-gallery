import { Box, Center, Flex, Grid } from "@chakra-ui/react";
import { PhotoListCardFlex, PhotoListSearchbar } from "components/gallery";
import { PhotoListFilter } from "components/gallery/PhotoListFilter";
import { CustomSpinner } from "components/global/CustomSpinner";
import { useAppDispatch, useAppSelector } from "hooks/useGallery";
import { usePaginatedItems } from "hooks/usePaginatedItems";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { getPhotos } from "redux/gallery/galleryState";
import { SinglePhotoType } from "schemas/PhotoDetailSchema";

export const PhotoListPage = () => {
  const dispatch = useAppDispatch();
  const photos = useAppSelector((state: any) => state.gallery.photos);
  const [loading, setLoading] = useState<boolean>(true);
  const { currentItems, pageCount, handlePageClick } = usePaginatedItems(
    photos,
    21
  );

  useEffect(() => {
    dispatch(getPhotos());
    setTimeout(() => setLoading(false), 1000);
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <CustomSpinner />
      ) : (
        <Box className="photo-list">
          <Flex className="photo-functions">
            <PhotoListSearchbar photos={photos} />
            <PhotoListFilter />
          </Flex>
          <Grid className="grid-cards" justifyContent="center">
            {currentItems?.map((item: SinglePhotoType) => {
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
      )}
    </>
  );
};
