import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text, VStack, Box } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import GenreItem from './GenreItem';
import getCroppedImageUrl from '../services/image-url';

const GenreList = ({ onGenreSelected }) => {
    const { data: genres, error, isLoading } = useGenres();

    if (error) return null;

    if (isLoading) return <Spinner />
    
    return (
      <>
        <List>
          {genres.map((genre) => (
            <ListItem key={genre.id} paddingY="4px">
              <HStack>
                <Image
                  src={getCroppedImageUrl(genre.image_background)}
                  boxSize="32px"
                  borderRadius="8"
                />
                <Button
                  _focus={{
                    // boxShadow:
                    //   "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                    // padding: "2px 4px",
                    fontWeight: "900",
                    color: "blue.300"
                  }}
                  onClick={() => onGenreSelected(genre)}
                  variant="link"
                  cursor="pointer"
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
        </List>
      </>
    );
}

export default GenreList