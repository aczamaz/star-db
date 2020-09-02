import React,{Component} from 'react';
import './app.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from '../../services/swapi-services';

export default class App extends Component
{
    swapiService = new SwapiService()

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
                    <ItemList
                        onSetItem = {this.setItem}
                        getResouse={this.swapiService.getAllPeople}
                        renderFunction={(item) => { return `${item.name}`}}
                    />
                    <PersonDetails itemId = {this.state.id}/>
                </div>
            </div>
        )
    }
}