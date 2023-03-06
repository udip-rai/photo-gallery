import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
} from "@chakra-ui/react";
import { SinglePhotoProps } from "schemas/PhotoDetailSchema";

export const PhotoDetailTable = (props: SinglePhotoProps) => {
  const { albumId, id, title, url, thumbnailUrl } = props;

  return (
    <TableContainer maxW="400px">
      <Table size="sm" variant="simple">
        <Thead>
          <Tr>
            <Th colSpan={2}>
              <Badge variant="solid" className="table-header-badge">
                Photo Details of Id no. {id}
              </Badge>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Th>Album Id</Th>
            <Td>{albumId}</Td>
          </Tr>
          <Tr>
            <Th>Id</Th>
            <Td>{id}</Td>
          </Tr>
          <Tr>
            <Th>Title</Th>
            <Td>{title}</Td>
          </Tr>
          <Tr>
            <Th>Url</Th>
            <Td>{url}</Td>
          </Tr>
          <Tr>
            <Th>Thumbnail Url</Th>
            <Td>{thumbnailUrl}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
