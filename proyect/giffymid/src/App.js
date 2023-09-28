import React from 'react';
import './App.css';
import ListOfGifs from './componets/listOfGifs';
import { Link, Route} from 'wouter';




export default function App() {
  


  return (
    <div className="App">
      <section className='App-content'>
        <h1> appp </h1>
        <Link to='/gif/panda'>Gifs de panda</Link>
        <Link to='/gif/morty'>Gifs de morty</Link>
        <Route
        component={ListOfGifs}
        path="/gif/:keyword"></Route>
      </section>
    </div>
  );
}


