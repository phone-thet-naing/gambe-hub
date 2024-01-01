import { Button, ButtonGroup, Grid, GridItem, Icon, Show, Text, VStack } from '@chakra-ui/react'
import NavBar from './components/Navbar'
import './App.css'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import PlatformSelector from './components/PlatformSelector'

function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  return (
    <>     
      <Grid templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
        lg: `"nav nav" "aside main"`
      }}
      
      templateColumns={{
        base: "1fr",
        lg: "230px 1fr"
      }}
      >
        <GridItem area='nav'>
          <NavBar />
        </GridItem>
        <Show above='lg'>
          <GridItem area='aside' paddingX={5} paddingY={5}>
            <GenreList onGenreSelected={(genre) => setSelectedGenre(genre)} />
          </GridItem>
        </Show>
        <GridItem area='main'>
          <PlatformSelector onOptionSelected={(platform) => setSelectedPlatform(platform)} />
          <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
        </GridItem>
      </Grid>
    </>
  )
}

export default App
