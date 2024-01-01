import useData from "./useData"

const useGames = (selectedGenre) => useData("/games", { params: { genres: selectedGenre?.id } });

export default useGames