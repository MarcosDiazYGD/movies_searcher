import { useState } from 'react';

import Movies from './components/Movies';
import lupa from '/lupa.svg'
import './App.css'

const App = () => {
  const [searching, setSearching] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const API_KEY = 'c32e54ad'

  const search = e => {
    e.preventDefault()
    setInputValue(e.nativeEvent.target[0].value);
    setSearching(true)
    renderMovies();
  }

  const renderMovies = () => {
    let url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputValue}`

    return (
      <>
        {searching ? (<Movies url={url} />) : null}
      </>
    )
  }

  return (
    <div className='App'>
      <form onSubmit={search} className={searching ? 'form_search searching' : 'form_search no_searching'} >
        <h3 className={ searching ? 'form__title invisible' : 'form__title visible'}>¿Cómo se llama la película?</h3>

        <div className='container_search'>
          <input type="text" name='searcher' placeholder='Avengers, Star Wars, Flash...' />
          <button ><img src={lupa} alt="icon of magnifyng glass" /></button>
        </div>
      
      </form>

      {renderMovies()}
    </div>
  );
};

export default App;