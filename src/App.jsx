import { Button, ButtonGroup, Grid, GridItem, Icon, Show, Text, VStack } from '@chakra-ui/react'
import NavBar from './components/Navbar'
import './App.css'
import GameGrid from './components/GameGrid'
import useGames from './hooks/useGames'
import { BsAlarm } from 'react-icons/bs'
import useGenres from './hooks/useGenres'
import GenreList from './components/GenreList'
import apiClient from './services/api-client'
import { useEffect } from 'react'

function App() {
  const { games, error, loading } = useGames()

  return (
    <>
      {
        error
          ?
          <Text color='red'>{error}</Text>
          :
          <Grid templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`
          }}>
            <GridItem area='nav'>
              <NavBar />
            </GridItem>
            <Show above='md'>
              <GridItem area='aside'>
                <VStack>
                  {/* <Icon as={BsAlarm} /> */}
                  <GenreList />
                </VStack>
              </GridItem>
            </Show>
            <GridItem area='main'>
              <GameGrid
                games={games}
                loading={loading} />
            </GridItem>
          </Grid>
      }
    </>
  )
}

export default App
