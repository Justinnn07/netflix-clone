import React from 'react';
import './App.css';
import Row from './Row';
import request from "./Requests"
import Banner from './Banner';
import Nav from './Nav';



function App() {
  return (
    <div className="App">

      {/*Nav Bar */}

      <Nav />

      {/*Banner */}
      
      <Banner />

      {/*build the row part*/}

      <Row title="NETFLIX ORIGINAL"
       fetchUrl={request.fetchNetflixOriginals}
       isLargeRow />
      <Row title="Top Rated"  fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies"  fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies"  fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies"  fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies"  fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries"  fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
