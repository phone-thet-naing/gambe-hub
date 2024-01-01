import AtomicSpinner from 'atomic-spinner'
import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'

const GameGrid = ({ selectedGenre, selectedPlatform }) => {
    const { data: games, error, isLoading: loading } = useGames(selectedGenre);
    const skeletons = Array.from(Array(10).keys());

    return (
        <>
            { error && <Text color='red'>{error}</Text> }
            <SimpleGrid padding={"1rem 1rem"} columns={{sm: 1, md: 2, lg: 3}} spacing={3}>
                { loading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton} />) }
                {             
                    games.map((game) => {

                        return <GameCard key={game.id} game={game} />
                        // If both filters are unselected, display all cards
                        if (selectedGenre === null && selectedPlatform === null) return <GameCard key={game.id} game={game} />;
                        
                        if (game.genres.map((genre) => genre.name).includes(selectedGenre?.name)) return <GameCard key={game.id} game={game} />
                    }) 
                }
            </SimpleGrid>
        </>
    )
}

export default GameGrid