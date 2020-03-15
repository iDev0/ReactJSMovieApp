import React from 'react';
import './Movie.css';
import PropTypes from'prop-types';


/***********************************************************************
컴포넌트의 생성 
- 컴포넌트의 생성의 기준은 State 가 필요하냐 필요하지 않냐에 따라 나뉠수 있다.
State 가 필요한경우는 class 로 컴포넌트로 생성 하며, 필요없는 경우 function 으로 구현한다.
ex)

// State 가 필요한 경우
class Movie extends Component {
    state = {
        summary : '이 영화는 블라블라블라블라블라'
    }
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.state.summary}</p>
            </div>
        )
    }
}

// State 가 필요없는 경우
function Movie({title}) {
    return (
        <div>{this.props.title}</div>
    )
}

***********************************************************************/

function Movie({title, poster, genres, synopsis}) {
    return (
        <div className="Movie">
            <div className="Movie__Columns">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Columns">
                <h1>{title}</h1>
                <div className="Movie_Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <p className="Movie__Synosis">
                    {synopsis}
                </p>
            </div>
            
        </div>
    )
}

// 속성에 대한 타입체크시 사용한다.
// 타입에 맞지 않은 값이 들어오면 오류 발생
Movie.propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired,
    synopsis : PropTypes.string.isRequired
}


function MovieGenre({genre}) {
    return (
        <span className="Movie__Genres">{genre}</span>
    )
}



// class MoviePoster extends Component {

//     static propTypes = {
//         poster : PropTypes.string.isRequired
//     }

//     render() {
//         console.log(this.props.poster);
//         return (
//             <img src={this.props.poster} />
//         );
//     }
// }


// State(=Dumb Component) 가 없는 컴포넌트
function MoviePoster({poster, alt}) {
    return (
        <img src={poster} alt={alt} title={alt} className="Movie_Poster"/>
    )
}

// State 가 없는 컴포넌트 의 타입체크
MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired
}

export default Movie;