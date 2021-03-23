import React, { Component } from 'react';
import './Detail.css';
class Detail extends Component {
     
    componentDidMount(){
        
        const { history,location} =this.props;
        
        location.state===undefined && (history.push('/'));
    }
    // (브라우저주소)location:3000/#/movie-detail로 접속시 에러남
    //이유:render()함수 실행 후 componentDidMount()가 실행되기 때문에 render()값을 못받아옴
    //해결방법: render()함수에도 componentDidMount() 에 작성한 라다이렉트 코드 추가해 주면 됨
    render() {
        
        const { location } =this.props;
        // return(<>{location.state?('aaa'):('bbb')}</>);
        return (
            <div>{ location.state ? (
                <ul>
                    <li><img src={ location.state.poster } alt={ location.state.title }/></li>
                    <li>{ location.state.title }</li>
                    <li>{ location.state.year }</li>
                    <li>{ location.state.genres }</li>
                </ul>
            ) : (null)}
            </div>
        );
    }
}
export default Detail;