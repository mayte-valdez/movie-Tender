import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import { useState, useEffect } from "react";
import MaSelection from './pages/MaSelection';
import TotalRandom from './pages/TotalRandom';
import Filtre from './pages/Filtre';
import Footer from './components/Footer'
import './App.css';
import FavFilms from './components/FavFilms';

function App() {
  const [favFilms, setFavFilms] = useState([]);
  
  function addFavorite(film) {
    if (favFilms.includes(film)) {
      setFavFilms(favFilms.filter((movie) => movie !== film));
    } else {
      setFavFilms((favFilms) => [...favFilms, film]);
    }
  }

  return (
    <div className="App">
      <Switch>
        <Route path='/' exact > <Home addFavFilm={(film)=>addFavorite(film)}/></Route>
        <Route path='/filtre' component={Filtre} />
        <Route path='/totalRandom'> <TotalRandom addFavFilm={(film)=>addFavorite(film)}/></Route>
        <Route path='/MaSelection' component={MaSelection} /> 
      </Switch>
      {
        favFilms.length !== 0 &&
        <FavFilms films={favFilms} addFavFilm={(film)=>addFavorite(film)}/>
      }
      
      <Footer />
    </div>
  );
}

export default App;
