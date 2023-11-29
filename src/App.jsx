import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/Navbar'
import './App.css'
import GameGrid from './components/GameGrid'

function App() {

  console.log('App is running')

  return (
    <>
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}>
        <GridItem area='nav'>
          <NavBar />
        </GridItem>
        <Show above='md'>
          <GridItem area='aside' bg='gold'>Aside</GridItem>
        </Show>
        <GridItem area='main'>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  )
}

export default App
