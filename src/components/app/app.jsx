import React,{Component} from 'react';
import './app.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi-services';
import DummySwapiService from '../../services/dummy-swapi-service';
import {SwapiServiceProvider} from '../swapi-service-context';
import { PersonPage, PlanetPage, StarshipPage } from '../pages';
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
          <Header onChangeContext={this.onMethodChangeContext} />
          <RandomPlanet />
          <PersonPage />
          <StarshipPage />
          <PlanetPage />
        </SwapiServiceProvider>
      </div>
    );
  }
}