import { MAIN_URL,API_KEY } from "../helpers/const";


export const getMovies =async (route,setIsLoading,setMovieList) => {
 await fetch(`${MAIN_URL}${route}api_key=${API_KEY}`, {})
  .then(response => response.json())
  .then(response => {
    console.log(response.results);
    setMovieList(response.results);
    setIsLoading(false);
    
  })
  .catch(err => { console.log(err); 
  });
};
