// import AtomicSpinner from 'atomic-spinner'
import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'

const GameGrid = ({ gameQuery }) => {
    const { data: games, error, isLoading: loading } = useGames(gameQuery);
    const skeletons = Array.from(Array(20).keys());

    if (error) return <Text color='red'>{error}</Text>

    return (
        <SimpleGrid padding={"1rem 1rem"} columns={{ sm: 1, md: 2, lg: 4 }} spacing={5}>
            {loading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton} />)}
            {
                games.map((game) => <GameCard key={game.id} game={game} />)
            }
        </SimpleGrid>
    )
}

export default GameGrid