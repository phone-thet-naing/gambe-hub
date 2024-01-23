import useGenres from "./hooks/useGenres";

const GenreList = () => {
    const { data: genres, isLoading, error } = useGenres();

    console.log('Genres: ', genres);    

    if (isLoading) return <p>Loading...</p>

    if (error) return <p style={{color: "red"}}>{ error }</p>

    return (
        <ul>
            {
                genres?.map((genre) => <li key={genre.id}>{ genre.name }</li>)
            }
        </ul>
    )
}

export default GenreList;