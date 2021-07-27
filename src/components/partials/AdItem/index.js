import React from 'react';
import { Link } from 'react-router-dom';
import { Item } from './styled';

export default (props) => {
    return (
        <Item className="adItem">
            <Link to={`/ad/${props.data.id}`}>
                <div className="itemImage">
                    <img src={props.data.title} />
                </div>

                <div className="itemName">{props.data.title}</div>

                <div className="itemPrice">...</div>
            </Link>
        </Item>
    );

}