import React from 'react';
import './Item.css'


const Item = (props) => (
        <tr className="Item">
            <td className="left">{props.item.title}</td>
            <td className="paidBy"> Paid by {props.item.paidBy}</td>
            <td className="right">{props.item.amount} €</td>
        </tr>
);

export default Item;
