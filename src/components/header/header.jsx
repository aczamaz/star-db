import React,{Component} from 'react';
import './header.css';
export default class Header extends Component
{
    render()
    {
        return(
            <div className="header">
                <div className="logo">
                    Star DB
                </div>
                <ul className="menu">
                    <li className="menu__item">
                        People
                    </li>
                    <li className="menu__item">
                        Planets
                    </li>
                    <li className="menu__item">
                        Starships
                    </li>                    
                </ul>
            </div>
        )
    }
}