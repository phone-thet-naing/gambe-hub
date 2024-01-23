import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

function useData(endpoint, requestConfig = null, deps = null) {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const controller = new AbortController();

        apiClient
            .get(endpoint, { signal: controller.signal, ...requestConfig })
            .then((response) => {
                setData(response.data.results);
                setLoading(false);
            })
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message);
                setLoading(false);
            });

        return () => controller.abort();
    }, deps ? [...deps] : []);

    return { data, error, isLoading };
}

export default useData;
