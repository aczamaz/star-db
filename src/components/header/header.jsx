import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './header.css';
export default class Header extends Component
{
    render()
    {
        const { onChangeContext } = this.props;
        return (
          <div className="header">
            <Link className="logo" to="/">
              Star DB
            </Link>
            <ul className="menu">
              <li>
                <Link className="menu__item" to="/people/">
                  People
                </Link>
              </li>
              <li>
                <Link className="menu__item" to="/planet/">
                  Planets
                </Link>
              </li>
              <li>
                <Link className="menu__item" to="/starships/">
                  Starships
                </Link>
              </li>
            </ul>
            <button className="button" onClick={onChangeContext}>
              change context
            </button>
          </div>
        );
    }
}