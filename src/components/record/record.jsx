import React from 'react'
import './record.css';
const Record = ({ item, label, field }) => {
    return (<div className="item-details__list-item">
        <b>{label}:</b> {item[field]}
    </div>)
}
export default Record;
