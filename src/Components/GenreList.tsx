import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../Hooks/useGenre";
import getCroppedImageUrl from "../Services/image-url";

interface Props {
  onselectGenre: (genre: Genre) => void;
}

const GenreList = ({ onselectGenre }: Props) => {
  const { data, isLoading, error } = useGenre();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} padding={"5px"}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius="10px"
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => onselectGenre(genre)}
              variant="link"
              fontSize="lg"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
