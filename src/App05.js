import React, { Component } from 'react';
import axios from 'axios';
// 부모 컴포넌트에서 Movie 컴포넌트로 props이용하여 데이터 보내줌 | movies.map()사용
import Movie from './Movie';

class App extends Component {
  // state
  state = {
    isLoading: true,
    // axios.get()에서 받아온 API 영화데이터 state 배열에 저장
    movies: [], 
  };

  //render()함수
  render() {
    // 2. 구조분해 할당 movies 데이터 얻어냄
    const {isLoading, movies} = this.state // true
    // 3. 자식 컴포넌트 Movie.js에 보내줄 배열 API 데이터 map()이용 추출
    return (
      <div>
        {isLoading? ('Loading...'): movies.map((movie)=>{
          console.log(movie);
          // 4. Movie 컴포넌트에 props 전달 = Movie 컴포넌트에 props 설정한것 모두 전달
          return(
            <Movie 
            //콘솔에 key 관련 에러 사라짐
            key ={movie.id}
            id = {movie.id} 
            year = {movie.year} 
            title = {movie.title} 
            summary = {movie.summary} 
            poster = {movie.medium_cover_image}
            rating ={movie.rating}
            />
          );
        })}
      </div>
    );
  }


  getMovies = async() => {
    // 변수 할당을 ES6 구조분해할당으로 변경 (데이터값 사용 더 편리)
    // const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    
    // 1. 구조분해할당으로 변경 = ES6 {}에 각각 객체의 값이 담기는 개념 -> 데이터를 잘게 나눠서 호출하기 편하게 만드는 과정
    const {
      // date>date>movies[]
      data: { // 여기 data 에 
        data: {movies}, // 여기 data에 movies 데이터 할당 
      },
      // 1. rating 기준으로 정렬기능이 추가된 axios.get()값 수정
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');


    
    console.log(movies);

    // 2. movies state에 영화 데이터 저장
    // key , value 가 같을 때는 축약 가능 (movies: movies -> movies)
    this.setState({movies, isLoading: false}); // 다시 맨 위의 state 로 돌아가서 다시 진행
    console.log(this.state);
  }

  // render() 함수 실행 후 componentDidMount() 함수 호출(생명주기함수)
  // (중요) 시네마앱 로딩하는 역할을 하는 함수 = 컴포넌트가 마움트 되면서 axios.get()함수 실행
  componentDidMount(){
    setTimeout(()=>{
      // this.setState({isLoading: false});
      
      //함수 호출하여 사용 | 함수 호이스팅 사용이므로 ()반드시 붙여줘야함
      this.getMovies();
    },3000);
  }

}
export default App;

//지금까지 총정리
//1.영화 API를 통해 사용할 데이터들을 볼러옴
//2.API를 가져올때 axios.get()함수 사용=데이터 가져올 시간이 필요하므로 async,await 사용
//3.state에 API데이터가 저장 or 업데이트 되면 =>Movie컴포넌트가 그려지도록 코딩