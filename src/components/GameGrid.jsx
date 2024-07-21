// import AtomicSpinner from 'atomic-spinner'
import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
// import useGames from "../react-query/hooks/useGames"
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import { useEffect } from "react"

const GameGrid = ({ gameQuery }) => {
    const { data: games, error, isLoading, isFetching } = useGames(gameQuery);
    const skeletons = Array.from(Array(20).keys())

    if (error) return <Text color='red'>{error}</Text>

    return (
        <SimpleGrid padding={"1rem 1rem"} columns={{ sm: 1, md: 2, lg: 4 }} spacing={5}>
            {isFetching && skeletons.map(skeleton => <GameCardSkeleton key={skeleton} />)}
            {
                games?.map((game) => <GameCard key={game.id} game={game} />)
            }
        </SimpleGrid>
    )
}

export default GameGrid