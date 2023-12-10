import { Button, ButtonGroup, Grid, GridItem, Show, Text } from '@chakra-ui/react'
import NavBar from './components/Navbar'
import './App.css'
import GameGrid from './components/GameGrid'
import useGames from './hooks/useGames'

function App() {
  const { games, error, loading } = useGames()    

  return (
    <>
      { 
        error ? 
        <Text color='red'>{ error }</Text> : 
        <Grid templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`
        }}>
          <GridItem area='nav'>
            <NavBar />
          </GridItem>
          <Show above='md'>
            <GridItem area='aside'>
              <h1>Aside</h1>
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
