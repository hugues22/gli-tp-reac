import React from 'react';
import './App.css';
import { users } from './MockData';
import Filter from "./Components/Filter/Filter";
import ListItem from "./Components/ListItem/ListItem";
import Total from "./Components/Total/Total";

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = { filter: ''};
    }

    handleFilter = (newFilter) => {
        console.log(newFilter);
        if (newFilter !== "") {
            this.setState({filter: (newFilter === "All" ? '' : newFilter)});
        }
    };

    render() {
        console.log(users);
        return (
            <div className="App">
                <Filter users={users} onFilter={this.handleFilter}/>
                <ListItem users={users}/>
                <Total/>
            </div>
        );
    }


}

export default App;


/*
<ListItem costs={this.state.costs.filter(item => {item.paidBy.includes(this.state.filter)})} users={users} onCostsChange={this.handleAddItem} />
 */