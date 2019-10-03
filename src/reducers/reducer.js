
export function costs(state=[], action){
    switch (action.type) {
        case 'ADD_COST' :
            return [...state, action.cost];
        default:
            return state;
    }
}

export function filter(state = '', action){
    switch (action.type) {
        case 'UPDATE_FILTER' :
            return action.filter;
        default:
            return '';
    }
}