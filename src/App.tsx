import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./Hooks/useGenre";
const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>

        <Show above="lg">
          <GridItem padding="10px" area="aside">
            <GenreList onselectGenre={(genre) => setSelectedGenre(genre)} />
          </GridItem>
        </Show>

        <GridItem area="main">
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
