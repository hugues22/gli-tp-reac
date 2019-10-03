import React from 'react';
import './ListItem.css'
import Item from "../Item/Item";
import AddItem from "../AddItem/AddItem";
import {connect} from "react-redux";

class ListItem extends React.Component {

    render(props) {
        return(
            <div>
                <table className="ListItem">
                    <tbody>
                    {this.props.costs.filter(item => (item.paidBy.includes(this.props.filter.filter) || this.props.filter.filter === "All" || this.props.filter === "")).map((item, key) => {
                        return <Item key={key} item={item}/>
                    })}
                    </tbody>
                </table>
                <AddItem users={this.props.users}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    costs: state.costs,
    filter: state.filter
});
const ConnectedGroupExpenseApp = connect(
    mapStateToProps,
)(ListItem);

export default ConnectedGroupExpenseApp;