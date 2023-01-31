import React, {Component} from 'react';
import classes from "./style/Main.module.css";

import Movies from "./Movies";
import Search from "./Search";


class Main extends Component{
    constructor(props) {
        super(props);
    }

    state={
        movies: [],
        loading: true

    }

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=c5637e18&s=avatar`)
            .then(response=> response.json())
            .then(data => this.setState({movies: data.Search}));
    }

    mySearch = (value,value2) => {
        this.setState({loading: true})
        debugger
        fetch(`https://www.omdbapi.com/?apikey=c5637e18&s=${value}&type=${value2}`)
            .then(response=> response.json())
            .then(data => this.setState({movies: data.Search}));
    }


    render() {
        const {movies,loading} = this.state;
        return (
            <div className={classes.wrapper}>

                <div >
                    <Search search={this.mySearch} />
                </div>

                {
                    loading?   < Movies movies={movies}/> : <h5>Loading...</h5>
                }



            </div>
        );
    };

}


export default Main;