import React, {Component} from 'react';
import classes from "./style/FIlterRadioButton.module.css"

class FilterRadioButton extends Component {
    constructor(props) {
        super(props);
       this.state={
            chek: "movie",
            chek2: "series",
            res: ""
        }

    }

    handleChange=(event)=>{
        this.props.addStateCheck(event.target.value)
    }

    render() {
        return (
            <div>
                <div className={classes.box}>
                    <div>
                        <span className={classes.box__title}>All</span>
                        <input type="radio" name={"contact"} onChange={this.handleChange} value={this.state.res}/>
                    </div>
                    <div>
                        <span className={classes.box__title}>Movie</span>
                        <input type="radio"  name={"contact"} onChange={this.handleChange} value={this.state.chek} />
                    </div>
                    <div>
                        <span className={classes.box__title}>Series</span>
                        <input type="radio" name={"contact"} onChange={this.handleChange} value={this.state.chek2}/>
                    </div>

                </div>
            </div>
        );
    }
}

export default FilterRadioButton;