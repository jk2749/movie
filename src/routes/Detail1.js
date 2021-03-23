//상세페이지 콘텐츠 링크 컴포넌트
// #1.함수형 Detail컴포넌트
import React from 'react';

//.Movie.js에서 보낸데이터 = state
//반드시 ,route props 를 이해해야함 
//route props: 라우팅 대상이 되는 컴포넌트에 넘겨주는 기본 props가 있음 (아래 콘솔로 찍은 값들)
//(예){history: {…}, location: {…}, match: {…}, staticContext: undefined}
//즉,Route 컴포넌트가 그려줄 컴포넌트에 전달한 기본 props임
function Detail(props){
    // 콘솔로 state값 확인:
    //영화카드 클릭해서 링크로  안 들어가고, (브라우저) /movie-detail 입력하여 접속할경우
    console.log(props);
    //state: undefined로 나옴 =movie 컴포넡트의 state값이 안 넘어옴
    //그래서, 아래 Detail페이지 문자열만 출력됨
    return(
        <div>
        Detail페이지
        </div>
    );
    //사용자가 이렇게 접근할 것에 대비해, 리다이렉트 기능으로 강제로 HOME컴포넌트로 [리다이렉트]해야 함
    //route props에 history키 이용 
    //history 키 중 go,goBack, goforwad등 중에서 push()함수를 사용하여 지정한 URL로 보내 줄 예정
};


export default Detail;