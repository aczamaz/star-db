import React,{Component} from 'react';
import './app.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi-services';
import DummySwapiService from '../../services/dummy-swapi-service';
import {SwapiServiceProvider} from '../swapi-service-context';
import { PersonPage, PlanetPage, StarshipPage } from '../pages';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import { StartshipDetail } from '../sw-components';
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
            <Route path="/" render={() => <h2>Welcom to StarDb</h2>} exact />
            <Route path="/people/:id?" component={PersonPage} />
            <Route path="/planet/" component={PlanetPage} />
            <Route path="/starships/" component={StarshipPage} exact/>
            <Route
              path="/starships/:id"
              render={({match})=>{
                const {id} = match.params;
                return <StartshipDetail itemId={id}/>
              }}
            />
          </Router>
        </SwapiServiceProvider>
      </div>
    );
  }
}