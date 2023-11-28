import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/Navbar'
import './App.css'

function App() {

  console.log('App is running')

  return (
    <>
      <Grid templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`
      }}>
        <GridItem area='nav'>
          <NavBar />
        </GridItem>
        <Show above='md'>
          <GridItem area='aside' bg='gold'>Aside</GridItem>
        </Show>
        <GridItem area='main' bg='silver'>Main</GridItem>
      </Grid>
    </>
  )
}

export default App
