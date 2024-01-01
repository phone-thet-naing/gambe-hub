import { HStack, Image, Text, Box } from "@chakra-ui/react"
import getCroppedImageUrl from "../services/image-url"

const GenreItem = ({ genre }) => {
  return (
    <HStack cursor="pointer">
        {/* <Image boxSize="32px" borderRadius="10px" src={getCroppedImageUrl(genre.image_background)} /> */}
        <Text fontSize="0.85rem" fontWeight="bold" fontFamily="Varela Round">{ genre.name }</Text>
    </HStack>
  )
}

export default GenreItem