import React from 'react';
import './item-list.css';
import Spinner from '../spinner';
const ItemList = (props) =>
{
    const {data} = props;
    if (!data)
        return <Spinner/>;
    const items = data.map((item) => {
        const { renderFunction, onSetItem } = props;
        const { id } = item;
        const label = renderFunction(item);
        return (
            <div
                className="item-list__item"
                key={id}
                onClick={() =>onSetItem(id)}
            >
                {label}
            </div>
        );

    });
    return(
        <div className="item-list">
            {items}
        </div>
    )
}
export default ItemList;