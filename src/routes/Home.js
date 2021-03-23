import React, { Component } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';
class Home extends Component {
  // state
  state = {
    isLoading: true,
    movies: [],
  };

  // render()함수
  render() {
    const {isLoading, movies} = this.state
    return (
      <section className="container">
        { isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...중</span>
          </div>
          ):(
            <div className="movies">
              { movies.map(movie =>(
                <Movie 
                  key ={movie.key}
                  id={movie.id}
                  year = {movie.year}
                  title = {movie.title}
                  summary = {movie.summary}
                  poster = {movie.medium_cover_image}
                  rating = {movie.rating}
                  genres = {movie.genres}
                />
              ))}
            </div>
            ) }
      </section>
    );
  };

  getMovies = async () =>{
    
    const {
      data: { // 여기 data에 
        data: { movies }, // 여기 data에 movies 데이터 할당
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');

    console.log(movies);

    this.setState({movies: movies, isLoading:false});
  }

  componentDidMount(){
      this.getMovies();
  }
}
export default Home;
