//상세페이지 콘텐츠 링크 컴포넌트
// #2. 클래스형 Detail컴포넌트
import React, { Component } from 'react';
//componentDidMount()사용하여 Detail컴포넌트 마운트시 push()함수 쓰기 위해
class Detail extends Component {
    // A.Detail 컴포넌트가 마운트 되면 
    componentDidMount(){
        // B.구조분해할당 location,history 키 값 얻고 =변수에 할당
        const { history,location} =this.props;
        // c.location.state가 없는경우
        // D.Home컴포넌트로 자동 이동되도록 코딩(localhost:3000/movie-detail로 직접접속시)
        location.state===undefined && (history.push('/'));
    }
    render() {
        //E. Movie props에서 보낸 키값을 구조분해할당하여 location에 저장
        const { location } =this.props;
        return (
            // F.넘어온 데이터 값들 중 원하는것만 출력
            <ul>
                <li><img src={ location.state.poster } alt={ location.state.title }/></li>
                <li>{ location.state.title }</li>
                <li>{ location.state.year }</li>
                <li>{ location.state.genres }</li>
            </ul>
        );
    }
}

export default Detail;