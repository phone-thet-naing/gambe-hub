import axios from "axios";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";

const usePosts = (postQuery) => { 
 
    return useInfiniteQuery({
      queryKey: ['posts', postQuery],
      queryFn: ({ pageParam = 1 }) =>
        axios
          .get("https://jsonplaceholder.typicode.com/posts", {
            params: {
                _start: (pageParam - 1) * postQuery.LIMIT,
                _limit: postQuery.LIMIT
            }
          })
          .then((response) => response.data),
      staleTime: 1 * 60 * 1000, // 1m
      keepPreviousData: true,
      getNextPageParam: (lastPage, allPages) => lastPage.length === postQuery.LIMIT ? allPages.length + 1 : undefined
      // getNextPageParam: (lastPage, allPages) => lastPage.nextPage,
      // getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor
    });
}

export default usePosts;