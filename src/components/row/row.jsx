import React from 'react';
import './row.css';

const Row = ({ left, right }) => {
    return (
        <div className="panel-wr">
            {left}
            {right}
        </div>
    );
}
export default Row;