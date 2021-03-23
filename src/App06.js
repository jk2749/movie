import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Movie from './components/Movie';

class App extends Component {
  state = {
    isLoading: true,
    movies: [], 
  };

  
  render() {
    
    const {isLoading, movies} = this.state // true
    
    return (
      <section className="container">
        {isLoading? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
            </div>
          ) : (
            <div className="movies">
              { movies.map(movie => (
                 <Movie 
                 genres ={movie.genres}
                 key ={movie.id}
                 id = {movie.id} 
                 year = {movie.year} 
                 title = {movie.title} 
                 summary = {movie.summary} 
                 poster = {movie.medium_cover_image}
                 rating ={movie.rating}
                 />
              )) }

            </div>
          )}
      </section>
    );
  }


  getMovies = async() => {

    const {

      data: {  
        data: {movies}, 
      },
 
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');


    
    console.log(movies);

 
    this.setState({movies, isLoading: false}); 
    console.log(this.state);
  }


  componentDidMount(){
    setTimeout(()=>{
 
      this.getMovies();
    },3000);
  }

}
export default App;

