import React from 'react';
import './item-list.css';
import Spinner from '../spinner';
import PropTypes from 'prop-types';
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
ItemList.defaultProps = {
  onSetItem:()=>{}
};
ItemList.propTypes = {
  onSetItem: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderFunction: PropTypes.func.isRequired,
};
export default ItemList;