import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import apiClient from "../../services/api-client";

const useGenres = () => {

    return useQuery({
        queryKey: ['genres'],
        queryFn: () => 
            apiClient
                .get('/genres')
                .then((response) => response.data.results),
        staleTime: 1 * 60 * 1000, // 1m
    });

}

export default useGenres;