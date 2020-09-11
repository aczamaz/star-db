import React from 'react';
import './row.css';
import PropTypes from 'prop-types';

const Row = ({ left, right }) => {
    return (
        <div className="panel-wr">
            {left}
            {right}
        </div>
    );
}

Row.propTypes =
{
   left: PropTypes.node,
   right: PropTypes.node,
}; 
export default Row;