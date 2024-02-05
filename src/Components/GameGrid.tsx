import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../Hooks/useGame";
import GameCard from "./GameCard";
import GameCardSeletion from "./GameCardSeletion";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../Hooks/useGenre";
interface Props {
  selectedGenre: Genre | null;
}
const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGame(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={4}
      >
        {isLoading &&
          skeletons.map((skeletion) => (
            <GameCardContainer key={skeletion}>
              <GameCardSeletion />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
