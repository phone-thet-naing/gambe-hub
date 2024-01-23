import { Heading } from '@chakra-ui/react'

const GameHeading = ({ gameQuery }) => {
  const { platform, genre } = {...gameQuery}

  if (!platform && !genre) return "";

  return (
    <Heading marginBottom={3}>      
      { platform ? platform.name : "" } { genre ? genre.name : ""} Games
    </Heading>
  )
}

export default GameHeading