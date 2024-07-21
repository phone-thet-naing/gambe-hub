import apiClient from "../../services/api-client";
import { useQuery } from "@tanstack/react-query";

const useGames = (endpoint, requestConfig = null, deps = null) => {

    return useQuery({
        queryKey: ["games", ...(deps || [])],
        queryFn: () => apiClient
                            .get(endpoint, { ...requestConfig })    
                            .then((res) => res.data.results),
        staleTime: 1* 60 * 1000,
    })
}

export default useGames;