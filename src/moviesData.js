const baseURL = import.meta.env.VITE_API_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export async function getMoviesId() {
  const data = await fetch(`${baseURL}movie/popular?${apiKey}`);
  const res = await data.json();
  const ids = await res.results.map((movie) => movie.id);
  return ids;
}

export async function getVideos(id) {
  const data = await fetch(`${baseURL}movie/${id}/videos?${apiKey}`);
  const res = await data.json();
  return res;
}
