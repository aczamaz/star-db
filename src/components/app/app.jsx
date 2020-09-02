import React,{Component} from 'react';
import './app.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from '../../services/swapi-services';
import Row from '../row';
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
        const itemList =
        (
            <ItemList
                onSetItem={this.setItem}
                getResouse={this.swapiService.getAllPeople}
                renderFunction={(item) => { return `${item.name}` }}
            />
        );
        const personDetails = 
        (
            <PersonDetails itemId={this.state.id} />
        );
        return(
            <div className="app">
                <Header/>
                <RandomPlanet/>
                <Row left={itemList} right={personDetails}/>
            </div>
        )
    }
}