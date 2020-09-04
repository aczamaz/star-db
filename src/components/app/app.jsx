import React,{Component} from 'react';
import './app.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import SwapiService from '../../services/swapi-services';
import Row from '../row';
import ErrorBoundry from '../error-boundry';
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
                onSetItem = { this.setItem }
                getResouse = { this.swapiService.getAllPeople }
                renderFunction = { (item) => { return `${item.name}` } }
            />
        );
        const personDetails = 
        (
                <ItemDetails
                    itemId = { this.state.id }
                    getData={ this.swapiService.getPerson }
                />
        );
        return(
            <div className="app">
                <Header/>
                <RandomPlanet/>
                <ErrorBoundry>
                    <Row left = {itemList} right={personDetails}/>
                </ErrorBoundry>
            </div>
        )
    }
}