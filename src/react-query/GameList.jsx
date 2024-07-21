import useGames from "./hooks/useGames"

const GameList = () => {
    const gameQuery = {
        genre: {
            id: 2
        },
        platform: null,
        ordering: null,
        search: null
    }
    const { data, isLoading, error } = useGames();

    console.log("GamesList ", data)

    if (error) return <p>{error}</p>

    return <h1>Game List</h1>
}

export default GameList