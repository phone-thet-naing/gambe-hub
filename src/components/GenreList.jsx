import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text, VStack, Box, Stack } from '@chakra-ui/react'
import useGenres from '../react-query/hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';

const GenreList = ({ onGenreSelected }) => {

  const { data: genres, error, isLoading } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />

  return (
    <VStack>
      <List whiteSpace='nowrap'>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="4px">
            <HStack>
              <Image src={getCroppedImageUrl(genre.image_background)} boxSize="32px" borderRadius="8" />
              <Button _focus={{
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
    </VStack>
  );
}

export default GenreList