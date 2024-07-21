// import useData from "./useData";
import useData from "../react-query/hooks/useData";

const useGames = (gameQuery) =>
  useData(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortingCategory,
        search: gameQuery.searchText
      },
    },
    [gameQuery]
  );

export default useGames;
