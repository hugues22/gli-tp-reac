import React from "react";
import './Filter.css';
import { updateFilter } from "../../actions";
import {connect} from "react-redux";

class Filter extends React.Component{

    constructor(props){
        super(props);
        this.handleFilter= this.handleFilter.bind(this);
    }

    handleFilter(e){
        this.props.updateFilter(e.target.value);
    }
    render() {
        return(
            <div className="Filter">
                Integration Week End
                <div>
                    <label>Filter : </label>
                    <select onChange={(e) => this.handleFilter(e)}>
                        <option>All</option>
                        {this.props.users.map((value, key) => {
                            return <option key={key}>{value}</option>
                        })}
                    </select>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({costs: state.costs});
const mapDispatchToProps =  dispatch => {
    return {
        updateFilter : (filter) => {
            dispatch(updateFilter(filter))
        }
    }
};

const ConnectedGroupExpenseApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);

export default ConnectedGroupExpenseApp;