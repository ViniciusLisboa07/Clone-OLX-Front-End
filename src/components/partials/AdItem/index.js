import React from 'react';
import { Link } from 'react-router-dom';
import { Item } from './styled';

export default (props) => {
    
    let price = '';

    if(props.data.priceNegotiable){
        price = 'Preço negociável!';
    } else {
        price = `R$ ${props.data.price}`;
    }

    return (
        <Item className="adItem">
            <Link to={`/ad/${props.data.id}`}>

                <div className="itemImg">
                    <img src={props.data.img} alt=""></img>
                </div>

                <div className="itemName">{props.data.title}</div>

                <div className="itemPrice">{price}</div>
            </Link>
        </Item>
    );
}