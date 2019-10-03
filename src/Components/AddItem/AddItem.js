import React from 'react';
import { connect } from 'react-redux';
import './AddItem.css';
import { addCost } from "../../actions";
import { CreateCost } from "../../Parse";

class AddItem extends React.Component{

    constructor(props){
        super(props);
        this.handleClick= this.handleClick.bind(this);
    }

    handleClick(e){
        if(this.title.value !== "" && this.amount.value !== ""){
            //CreateCost(this.title.value, this.paidBy.value, this.amount.value);
            this.props.addCost(this.title.value, this.paidBy.value, this.amount.value);
        }
    }

    render(props) {
        return (
            <form className="AddItem">
                <table>
                    <tbody>
                    <tr>
                        <td><input className="what" placeholder="what ?" ref={(t) => this.title = t}/></td>
                        <td>
                            <select className="who" placeholder="who ? " ref={(t) => this.paidBy = t}>
                                {this.props.users.map((value, key) => {
                                    return <option key={key}>{value}</option>
                                })}
                            </select>

                        </td>
                        <td><input className="price" placeholder="€" ref={(t) => this.amount = t}/>
                            <button type="button" className="add" onClick={(e) => this.handleClick(e)}>+</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        );
    }
}

const mapStateToProps = state => ({costs: state.costs});
const mapDispatchToProps =  dispatch => {
    return {
        addCost : (title, paidBy, amount) => {
            dispatch(addCost(title, paidBy, amount))
        }
    }
};

const ConnectedGroupExpenseApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddItem);

export default ConnectedGroupExpenseApp;