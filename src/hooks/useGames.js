import { useState, useEffect } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios"

function useGames() {
    const [games, setGames] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const controller = new AbortController()
        const signal = controller.signal

        apiClient.get('/games', { signal: signal })
            .then((res) => {
                setGames(res.data.results)
                setLoading(false)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return
                setError(err.message)
                setLoading(false)
            })

        return () => controller.abort()
    }, [])

    return {
        games, error, loading
    }
}

export default useGames