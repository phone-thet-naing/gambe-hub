import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

function useData(endpoint, requestConfig = null) {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    // console.log("requestConfig: ", requestConfig, "\n", "deps: ", deps)

    useEffect(() => {
        setLoading(true);
        const controller = new AbortController();

        apiClient
            .get(endpoint, { signal: controller.signal, ...requestConfig })
            .then((response) => {
                // console.log("Genres: ", response.data.results);
                setData(response.data.results);
                setLoading(false);
            })
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message);
                setLoading(false);
            });

        return () => controller.abort();
    }, []);

    return { data, error, isLoading };
}

export default useData;
