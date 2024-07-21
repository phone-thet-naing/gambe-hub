import apiClient from "../../services/api-client";
import { useQuery } from "@tanstack/react-query";

const useData = (endpoint, requestConfig = null, deps = null) =>
  useQuery({
    queryKey: ["games", ...(deps || [])],
    queryFn: () =>
      apiClient
        .get(endpoint, { ...requestConfig })
        .then((res) => res.data.results),
    staleTime: 1 * 60 * 1000,
  });

export default useData;

