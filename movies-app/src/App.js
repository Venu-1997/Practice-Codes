import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeadings from './components/MovieListHeadings';
import SearchBox from './components/SearchBox';
import AddFavorites from './components/AddFavorites';
import RemoveFavorites from './components/RemoveFavorites';


function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favorites, setFavorites] = useState([]);

  const getMovieRequest = async(searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=ecb8593e`;
    const response = await fetch(url);
    const data = await response.json();
    if(data.Search) setMovies(data.Search);
  }

  useEffect(() => {
    getMovieRequest(searchValue);
  },[searchValue]);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favorites",JSON.stringify(items));
  };

  const addFavoriteMovie = (movie) => {
    const newFavorites = [...favorites,movie];
    setFavorites(newFavorites);
    saveToLocalStorage(newFavorites);
  } 
  const removeFavoriteMovie = (movie) => {
    const newFavorites = favorites.filter((favorite) => favorite.imdbID !== movie.imdbID);
    setFavorites(newFavorites);
    saveToLocalStorage(newFavorites);
  }
  
  return (
    <div className="container-fluid movieApp">
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeadings heading='Movies'/>
        <SearchBox searchValue = {searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList  movies={movies} handleFavoritesClick={addFavoriteMovie} favoriteComponent={AddFavorites}/>
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeadings heading="Favorites" />
      </div>
      <div className="row">
        <MovieList movies={favorites} handleFavoritesClick={removeFavoriteMovie} favoriteComponent={RemoveFavorites}/>
      </div>
    </div>
  );
}

export default App;
