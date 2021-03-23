import React from 'react';
import './App.css';
import { HashRouter, Route, Router } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';
// 최종1.Detail컴포넌트 추가
import Detail from "./routes/Detail";
function App(){
  return (
    <HashRouter>
      <Navigation/>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/about" component={About} />
      {/* 최종2.링크될 컴포넌트 라우터 추가 */}
      <Route path="/movie-detail" component={Detail}/>
      {/* 최종3.Movie 컴포넌트에 Link to 로 경로와 넘길 props값 지정해줌 */}
    </HashRouter>
  );
};
export default App;