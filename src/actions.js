const ADD_COST = 'ADD_COST';
const UPDATE_FILTER = 'UPDATE_FILTER';

export const addCost = (title, paidBy, amount) => {
    return {type: ADD_COST, cost: { title: title, paidBy: paidBy, amount:amount}};
};

export const updateFilter = (filter) => {
    return {type: UPDATE_FILTER, filter: { filter: filter}};
};