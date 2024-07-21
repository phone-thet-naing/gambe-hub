import { Box, Button, ButtonGroup, Grid, GridItem, HStack, Icon, Show, Text, VStack, Heading, list, UnorderedList, ListItem, Select } from '@chakra-ui/react'
import NavBar from './components/Navbar'
import './App.css'
import './output.css'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
// import GenreList from './react-query/GenreList' 
import { useState } from 'react'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'
import PostList from './react-query/PostList'
import LoginForm from './components/authentication/LoginForm'
import GameList from './react-query/GameList'
import TodoList from './react-query/TodoList'
import Todo from './react-query/Todo'


function App() {
  const [gameQuery, setGameQuery] = useState({ genre: null, platform: null });

  // return (
  //   <PostList />
  // )

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
          <NavBar
            onSearchValueProvided={(searchText) => setGameQuery({ ...gameQuery, searchText })}
            onPartialSearchValueProvided={(partialSearchInput) => setSearchInput(partialSearchInput)}
          />
        </GridItem>

        <Show above='lg'>
          <GridItem area='aside' paddingX={5} paddingY={5}>
            <GenreList onGenreSelected={(genre) => setGameQuery({ ...gameQuery, genre })} />
          </GridItem>
        </Show>

        <GridItem area='main'>
          <Box padding="1rem">
            <GameHeading gameQuery={gameQuery} />
            <HStack>
              <PlatformSelector onOptionSelected={(platform) => setGameQuery({ ...gameQuery, platform })} />
              <SortSelector filters={gameQuery} onCategorySelect={(sortingCategory) => setGameQuery({ ...gameQuery, sortingCategory })} />
              <Button
                onClick={() =>
                  setGameQuery({
                    platform: null,
                    sortingCategory: null,
                    genre: null
                  })}>Clear Filter</Button>
            </HStack>
          </Box>

          <GameGrid gameQuery={gameQuery} />

        </GridItem>
      </Grid>
    </>
  )
}

export default App
