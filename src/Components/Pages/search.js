import React ,{Component} from 'react';
import Hero from './hero';
import Loading from './loading';
import SeriesList from './seriesList';

class Series extends Component{
    state ={
        series:[],
        seriesName: '',
        isFetching: false
    }
    onSeriesInputChanged = (e) =>{
        this.setState({seriesName: e.target.value, isFetching: true});
        return(
            fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then((response) => response.json())
            .then((data)=> this.setState({series : data,isFetching:false}))
        )
    }
    render(){
        const {series, seriesName, isFetching} = this.state;
        return(
            <>
            <section className="main">
            <Hero />
            <div className="main__section">
                <div className="main__section-input">
                    <input 
                    type="text"
                    placeholder="Search Series"
                    onChange={this.onSeriesInputChanged}
                    />
                    <img src="/images/magnifying.png" alt="Search Icon" onClick={this.state} className="search__icon"/>
                </div>
            </div>
            </section>
            <section className="series">
            {
                    !isFetching && series.length === 0 && seriesName.trim()=== ''
                    && 
                    <p className="fetching__text">Please Input a Series Name</p>
                }{
                    !isFetching && series.length === 0 && seriesName.trim() !==""
                    &&
                    <p className="fetching__text">No TV Series has Been found by this Name</p>
                }
                {
                    isFetching && <Loading />
                }{
                    !isFetching && <SeriesList list={this.state.series} />
                }
            </section>
            </>
        )
    }
}
export default Series;