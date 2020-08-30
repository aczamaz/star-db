import React,{Component} from 'react';
import './app.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
export default class App extends Component
{
    state = {
        id: null
    }
    setItem = (id)=>
    {
        this.setState({id});
    }
    render()
    {
        return(
            <div className="app">
                <Header/>
                <RandomPlanet/>
                <div className="panel-wr">
                    <ItemList onSetItem = {this.setItem}/>
                    <PersonDetails itemId = {this.state.id}/>
                </div>
            </div>
        )
    }
}