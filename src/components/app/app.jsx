import React,{Component} from 'react';
import './app.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi-services';
import DummySwapiService from '../../services/dummy-swapi-service';
import {SwapiServiceProvider} from '../swapi-service-context';
import { PersonPage, PlanetPage, StarshipPage } from '../pages';
import {BrowserRouter as Router, Route } from 'react-router-dom';
export default class App extends Component {
  state = {
    swapiService: new SwapiService(),
  };
  onMethodChangeContext = () => {
    this.setState(({ swapiService }) => {
      const service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return { swapiService: new service() };
    });
  };
  render() {
    return (
      <div className="app">
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <Header onChangeContext={this.onMethodChangeContext} />
            <RandomPlanet />
            <Route path="/people" component={PersonPage} />
            <Route path="/starships" component={StarshipPage} />
            <Route path="/planet" component={PlanetPage} />
          </Router>
        </SwapiServiceProvider>
      </div>
    );
  }
}