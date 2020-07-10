import React,{Component} from 'react';
import './app.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';

export default class App extends Component
{
    render()
    {
        return(
            <div className="app">
                <Header/>
                <RandomPlanet/>
                <div className="panel-wr">
                    <ItemList/>
                    <ItemList/>
                </div>
            </div>
        )
    }
}