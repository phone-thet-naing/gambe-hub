import AtomicSpinner from 'atomic-spinner'
import { Text } from "@chakra-ui/react"
import useGames from "../hooks/useGames"

const GameGrid = () => {
    const { games, error, loading } = useGames()

    return (
        <>
            { loading && <AtomicSpinner atomSize='60px' /> }
            { error && <Text color='red'>{error}</Text> }
            {!error && !loading &&
                <table>
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Release Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {games.map((game, index) => 
                            <tr key={game.id}>
                                <td>{index + 1}</td>
                                <td>{game.id}</td>
                                <td>{game.name}</td>
                                <td>{game.released}</td>
                            </tr>
                        )}
                    </tbody>
            </table>
            }
        </>
    )
}

export default GameGrid