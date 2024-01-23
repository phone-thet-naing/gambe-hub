import apiClient from "../../services/api-client"

const useTodos = () => {
  return useQuery({
    queryKey: ['genres'],
    queryFn: () => apiClient.get('/genres')
      .then((res) => res.data.results)
  })
}

export default useTodos