import { useEffect, useState } from "react"
import AtomicSpinner from 'atomic-spinner'
import apiClient from "../services/api-client"
import { Text } from "@chakra-ui/react"

const GameGrid = () => {
    const [games, setGames] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        apiClient.get('/games')
            .then((res) => {
                setGames(res.data.results)
                setLoading(false)
            })
            .catch((err) => {
                setError(err.message)
                setLoading(false)
            })
    }, [])

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