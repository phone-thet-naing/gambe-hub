import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useTodos = () => {

  return useQuery({
    queryKey: ['todos'],
    queryFn: () => 
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.data)
  })

}

export default useTodos