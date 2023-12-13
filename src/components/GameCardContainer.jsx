import { Box } from "@chakra-ui/react"

const GameCardContainer = ({ children }) => {
  return (
    <Box borderRadius={'0.625rem'} overflow='hidden' width="24vw">
        { children }
    </Box>
  )
}

export default GameCardContainer