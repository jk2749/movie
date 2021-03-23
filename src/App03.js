import React, { Component } from 'react';
import axios from 'axios';
class App extends Component {
  // state
  state = {
    isLoading: true,
    // axios.get()에서 받아온 API 영화데이터 state에 배열에 저장
    movies: [],
  };

  // render()함수
  render() {
    // 구조분해할당 : this.state에 있는 데이터 isLoading 키값을 가져옴
    const {isLoading} = this.state
    return (
      <div>
        {/* 초기값이 true = 문자열 Loading이 브라우저에 그려짐 */}
        {isLoading ? ('Loading...'):('준비완료')}
      </div>
    );
  };
  
  getMovies = async () =>{
    
    //변수할당을 ES6 구조분해할당으로 변경(데이터값 사용 더 편리)
    // const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    //data>data>movies[]

    //1. 구조분해할당으로 변경 =ES6{}에 각각 객체의 값이 담기는 개념
    const {
      data: { //여기에 date에
        data: { movies }, //여기에 data에 movies 데이터 할당
      },
    }= await axios.get('https://yts-proxy.now.sh/list_movies.json');

    // console.log(movies);
    // console.log(movies.data.data.movies);

    // 2.movies state에 영화 데이터 저장
    //키명 ,키값이 같을때는 축약가능
    this.setState( { movies, isLoading:false } );

    
  }



  // render() 함수 실행후 componentDidMount() 함수 호출(생명주기함수)
  //(중요) 시네마앱 로딩하는 역할을 하는 함수 = 컴포넌트가 마운트 되면서 axios.get()함수 실행
  componentDidMount(){
    //함수호출 하여 사용 | 함수 호이스팅 해와서 사용하므로 ()반드시 붙여줘야함 
      this.getMovies();
    // setTimeout(()=>{
    //   this.setState({isLoading: false});
    // },3000);
  }

}

export default App;

// axios는 네트워크 사용하므로 느리게 동작함
// 그래서, axios.get()을 포함하고 있는 함수의 실행이 끝날때까지 기다려달라고 자바스크립트에 친절히 알려줘야함
// 그래야, 모든 데이터를 불러온 다음 사용 가능(당연함) | 제이쿼리 $(document).ready()와 비슷한 개념
// async await 사용 = 둘이 짝궁