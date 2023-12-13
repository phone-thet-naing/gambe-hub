import { Text, VStack } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'

const GenreList = () => {
    const { genres, error } = useGenres();
    
    return (
        <ul>
            { genres.map((genre) => <li key={genre.id}>{ genre.name }</li>) }
        </ul>
    )
}

export default GenreList