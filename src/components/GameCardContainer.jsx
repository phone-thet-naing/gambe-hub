import { Box } from "@chakra-ui/react"

const GameCardContainer = ({ children }) => {
  return (
    <Box 
        borderRadius={'0.625rem'} 
        overflow='hidden'
    >
        { children }
    </Box>
  )
}

export default GameCardContainer