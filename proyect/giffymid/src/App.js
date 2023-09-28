import React from 'react';
import './App.css';
import ListOfGifs from './componets/ListOfGifs';


export default function App() {
  


  return (
    <div className="App">
      <section className='App-content'>
        <ListOfGifs keyword='program' />

      </section>
    </div>
  );
}


