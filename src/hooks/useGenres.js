import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

function useGenres() {
    const [genres, setGenres] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        apiClient.get("/genres", { signal: signal })
            .then((response) => {
                setGenres(response.data.results);
            })
            .catch((error) => {
                if (error instanceof CanceledError) {
                    return;
                }
                setError(error.message);
            })

        return () => controller.abort();
    }, []);

    return { genres, error }
}

export default useGenres;