//React 를 import해야 리액트가 JSX를 이해함
import { render } from '@testing-library/react';
import React from 'react';
// import 해야 DOM 컴포넌트 사용 가능
import ReactDOM from 'react-dom';
//그려줄 컴포넌트 import해줌
import App from './App';
// ReactDOM 컴포넌트의 render()를 이용하여 브라우저에 그려줌
ReactDOM.render(<App />,document.getElementById('root'));
