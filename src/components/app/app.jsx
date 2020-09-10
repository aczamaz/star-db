import React,{Component} from 'react';
import './app.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi-services';
import DummySwapiService from '../../services/dummy-swapi-service';
import Row from '../row';
import ErrorBoundry from '../error-boundry';
import {SwapiServiceProvider} from '../swapi-service-context';
import {
    StartshipList,
    PersonList,
    PlanetList,
    StartshipDetail,
    PersonDetail,
    PlanetDetail
} from '../sw-components';
export default class App extends Component
{
    state = {
        id: null,
        swapiService: new DummySwapiService()
    }
    setItem = (id)=>
    {
        this.setState({id});
    }
    onMethodChangeContext = () =>
    {
        this.setState(({ swapiService }) => {
            const service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
            return { swapiService: new service()}
        })
    }
    render()
    {
        const itemList =
        (
                <PersonList
                    onSetItem = { this.setItem }
                    renderFunction = { (item) => { return `${item.name}` } }
                />
        );
        const personDetails = 
        (
                <PersonDetail itemId = { this.state.id } />
                
        );
        return(
            <div className="app">
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Header onChangeContext = {this.onMethodChangeContext}/>
                    <RandomPlanet/>
                    <ErrorBoundry>
                        <Row left = {itemList} right={personDetails}/>
                    </ErrorBoundry>
                </SwapiServiceProvider>
            </div>
        )
    }
}