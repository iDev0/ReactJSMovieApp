import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {

  // 컴포넌트 동작 순서
  // Render : componentWillMount > render > componentDidMount
  // Uodate : willReceiveProps > shouldComponentUpdate == true > componentWillUpdate > render > componentDidUpdate

  // state 가 변경될때마다 render() 발생
  // state 를 변경하고자 하는경우 setState 사용하자
  state = {}

  componentWillMount() {
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     movies : [
    //       {
    //       id : 1,
    //       title : "기생충",
    //       poster : "https://i.ytimg.com/vi/jBdRhhSt3Bc/maxresdefault.jpg"
    //       },
    //       {
    //         id : 2,
    //         title : "괴물",
    //         poster : "https://upload.wikimedia.org/wikipedia/ko/thumb/6/6a/%EA%B4%B4%EB%AC%BC.jpg/220px-%EA%B4%B4%EB%AC%BC.jpg"
    //       },
    //       {
    //         id : 3,
    //         title : "테넷",
    //         poster : "https://news.maxmovie.com/wp-content/uploads/2019/12/20191223_m_jch_100009.jpg"
    //       },
    //       {
    //         title : '인터스텔라',
    //         poster : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSf8PDyJNXcg-KUXu2aOC-sY7Eh5LWa8QMvPDahyHYjCiGzgIP1'
    //       }
    //     ]
    //   })
    // }, 5000)


    // Promise : 비동기 처리방식
    // Promise 좋은시나리오 와 나쁜시나리오를 잡아준다.
    this._getMovies();
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }


  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      console.log(movie);
      return  <Movie 
                title={movie.title_english} 
                poster={movie.medium_cover_image} 
                key={movie.id} 
                genres={movie.genres}
                synopsis={movie.synopsis}
              />
    })


    return movies;
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
