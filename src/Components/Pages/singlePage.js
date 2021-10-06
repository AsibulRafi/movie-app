import React,{Component} from 'react'
import Loading from './loading';
import { Link } from 'react-router-dom'


class SinglePage extends Component{
    state ={
        show: null
    }
    componentDidMount(){
        const { id } = this.props.match.params;

        fetch(`http://api.tvmaze.com/shows/${id}?embed-episodes`)
        .then((response) => response.json())
        .then((data)=> this.setState({ show: data}))
    }
    render(){
        const {show} = this.state;
        console.log(show);
        return(
            <section className="movie">
                {show === null && <Loading />}
                {
                    show !== null && 
                    <>
                        <div className="movie__details">
                            <div className="movie__details-info">
                                <div className="heading">
                                    <h1>{show.name}</h1>
                                </div>
                                <div className="info">
                                    <p className="info__text">Genres - {show.genres.join(',')}</p>
                                    <p className="info__text">Premiered - {show.premiered}</p>
                                    <p className="info__text">Language - {show.language}</p>
                                    <button className="info__btn">Watch Show</button>
                                </div>
                            </div>
                            <div className="movie__details-image">
                                <img src={show.image.original || show.image.medium} alt="movieImage" />
                            </div>
                        </div>
                        <div className="movie__details-text">
                             <p>{show.summary}</p>
                        </div>  
                        <Link to={`/`}>
                        <button class="home__button">Back To Home</button>
                        </Link>
                    </>
                }
            </section>
        )
    }
}
export default SinglePage;