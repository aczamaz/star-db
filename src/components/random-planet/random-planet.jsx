import React,{Component} from 'react';
import './random-planet.css';
import SwapiService from '../../services/swapi-services';
import Spinner from '../spinner';
import ErrorMessage from '../error-message'; 
export default class RandomPlanet extends Component
{
    SwapiService = new SwapiService();

    state = {
        planet: {},
        loading:true,
        error:false
    };

    constructor() {
        super();
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
const PlanetContent = ({planet}) =>
{
    const { id, name, population,
        rotationPeriod, diameter  } = planet;
    return (
        <React.Fragment>
            <img
                className="random-planet__img"
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                alt="" />
            <div className="random-planet__info">
                <div className="random-planet__name">
                    {name}
                </div>
                <div className="random-planet__list">
                    <div className="random-planet__list-item">
                        Population {population}
                    </div>
                    <div className="random-planet__list-item">
                        Rotation Period {rotationPeriod}
                    </div>
                    <div className="random-planet__list-item">
                        Diameter {diameter}
                    </div>
                </div>
            </div>
        </React.Fragment> 
    )
}