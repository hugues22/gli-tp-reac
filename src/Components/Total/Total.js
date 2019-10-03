import React from "react";
import './Total.css';
import {connect} from "react-redux";

class Total extends React.Component{

    render(){
        return(
            <div className="Total">
                Total Expenses : <span>
                {this.props.costs.filter(item => (item.paidBy.includes(this.props.filter.filter) || this.props.filter.filter === "All" || this.props.filter === "")).reduce((a, b) => {
                    return a + parseInt(b.amount);
                }, 0)} € </span>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    costs: state.costs,
    filter: state.filter
});
const ConnectedGroupExpenseApp = connect(
    mapStateToProps,
)(Total);

export default ConnectedGroupExpenseApp;