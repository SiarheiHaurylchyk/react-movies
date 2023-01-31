import React, {Component} from 'react';
import classes from "./style/Search.module.css"
import FilterRadioButton from "./FilterRadioButton";

class Search extends Component {
    constructor(props) {
        super(props);
    }

    state={
        search:"",
        chek:"",
    }

    addStateCheck=(value)=>{
        this.setState({chek: value})
    }

    myChange=(event)=>{
      this.setState({search: event.target.value})
    }

    addFunk = ()=>{

        this.props.search(this.state.search,this.state.chek);
        this.setState({search: ""})

    }

    myOnKeyDown = (event)=>{
        if(event.key==="Enter"){

            this.props.search(this.state.search ,this.state.chek);
            this.setState({search: ""})

        }
    }



    render() {
        return (
            <div>
                <div className={classes.content} >
                    <input className={classes.input} type="text"
                           placeholder="Search..."
                           value={this.state.search}
                           onChange={this.myChange}
                           onKeyDown={this.myOnKeyDown}
                    />
                        <button className={classes.but} onClick={this.addFunk}>
                            Search
                        </button>
                    <FilterRadioButton addStateCheck={this.addStateCheck}/>

                </div>
            </div>
        );
    }
}

export default Search;