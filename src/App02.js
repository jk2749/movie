// axios 설치 : 터미널 앱 경로에서 > npm install axios
// HTTP 통신 라이브러리 : 다른 HTTP 통신 라이브러리들에 비해 문서화가 잘 되어 있고 API가 다양함
// 자바스크립트 fetch()대신 사용
// axios로 영화 API 가져오는 용도로 사용
import React, { Component } from 'react';
import axios from 'axios';
class App extends Component {
  // state
  state = {
    isLoading: true,
    // 영화데이터
    movie: [],
  };

  // render()함수
  render() {
    // 구조분해할당 : this.state에 있는 데이터 isLoading 키값을 가져옴
    const {isLoading} = this.state
    return (
      <div>
        {/* 초기값이 true = 문자열 Loading이 브라우저에 그려짐 */}
        {isLoading ? ('Loading...'):('Not yet')}
      </div>
    );
  };
  //1. axios.get() 영화 API 가져오기
    //1-2. async : 자바스크립트에게 getMovies함수는 기다릴 시간이 필요하다고 알려줌
    //             비동기 전환 = 바로 실행되지 않음
  getMovies = async () =>{
    // 1-1. await : 자바스크립트에게 axios.get()데이터를 다 받을때까지 실행을 기다려
    const movies = await axios.get('https://yts.mx/api/v2/list_movies.json');

    // 2-1.가져온 데이터 확인 = {}안에 객체로 되어있음 | {키:키값, 키2:키값2}형태
    // console.log(movies);
    //2-2.그중 data객체만 사용할 것이므로 해당 구조에 접근하여 필요한 데이터만 가져옴 data>data>movies[]
    console.log(movies.data.data.movies);
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