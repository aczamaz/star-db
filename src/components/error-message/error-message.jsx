import React, { Component } from 'react'
import './error-message.css';
import { ReactComponent as Icon } from './death-star.svg';

export default class ErrorMessage extends Component {
    render() {
        return (
            <div className="error">
                {<Icon/>}
               <span className="error__logo">
                    Error!
               </span>
               <span>
                    we are sorry for this
               </span>
               <span>
                    ours drones go to fix it
               </span>
            </div>
        )
    }
}
