import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../Hooks/useGenre";
import getCroppedImageUrl from "../Services/image-url";

interface Props {
  onselectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onselectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenre();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom="3px">
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} padding={"5px"}>
            <HStack>
              <Image
                boxSize="32px"
                objectFit="cover"
                borderRadius="10px"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => {
                  onselectGenre(genre);
                }}
                variant="link"
                fontSize="lg"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
