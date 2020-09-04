import React,{Component} from 'react';
import './random-planet.css';
import SwapiService from '../../services/swapi-services';
import Spinner from '../spinner';
import ErrorMessage from '../error-message';
import PlanetContent from '../planet-content';
export default class RandomPlanet extends Component
{
    SwapiService = new SwapiService();

    state = {
        planet: {},
        loading:true,
        error:false
    }
    componentDidMount()
    {
        this.updatePlanet();
    }
    onPlanetLoaded = (planet) => 
    {
        this.setState({ planet ,loading:false});
    }
    onErrorMessage = (err) =>
    {
        this.setState({error:true,loading:false});
    }
    updatePlanet() {
        const id = Math.floor((Math.random() * 20)) + 1;
        this.SwapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onErrorMessage);
    }

    render() {

        const { planet,loading,error } = this.state;

        const hasData = !(loading || error);
        const errorData = error ? <ErrorMessage/> : null; 
        const loader =  loading ? <Spinner/> : null;
        const content = hasData ? <PlanetContent planet={planet}/> : null;
        return(
            <div className="random-planet">
                {errorData}
                {loader}
                {content}
            </div>
        )
    }   
}