import AtomicSpinner from 'atomic-spinner'
import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'

const GameGrid = ({ games, loading }) => {
    // const [ games, error, loading ] = [...props]

    return (
        <>
            {/* { loading && <AtomicSpinner atomSize='60px' /> } */}
            {/* { error && <Text color='red'>{error}</Text> } */}

            <SimpleGrid padding={"1rem 1rem"} columns={{sm: 1, md: 2, lg: 3}} spacing={10}>
                { loading && '123456'.split("").map(skeleton => <GameCardSkeleton key={skeleton} />) }
                {             
                    games.map((game) => {
                        return <GameCard key={game.id} game={game} />
                    }) 
                }   
            </SimpleGrid>
        </>
    )
}

export default GameGrid