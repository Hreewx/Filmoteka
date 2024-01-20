const API_MOVIE_KEY = "7d644d60-e7a0-4b79-bd5a-60f4a4cb6a85";

export async function getMovies(query) {
  const res = await fetch(
    `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${query}&page=1`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": `${API_MOVIE_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  return data;
}
