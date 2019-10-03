import Parse from 'parse';
import { addCost } from './actions';

const COST_NAME = "15003460_Costs";
const TITLE = "title";
const PAIDBY = "paidBY";
const AMOUNT = "amount";
var Cost = Parse.Object.extend(COST_NAME);

Parse.initialize("zDdcWaZElGOezFM");
Parse.serverURL = 'https://parse.nebula.ovh/parse';

export function CreateCost(title, paidBy, amount){
    const cost = new Cost();
    cost.set(TITLE, title);
    cost.set(PAIDBY, paidBy);
    cost.set(AMOUNT, amount);
    cost.save().then(result => {
        addCost(result.title, result.paidBy, result.amount);
    });
}