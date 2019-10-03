import { costs, filter } from './reducer';

export default function rootReducer(state = {}, action){
    return {
        costs : costs(state.costs, action),
        filter : filter(state.filter, action)
    }
}

