import React,{Component} from 'react';
import './random-planet.css';
import SwapiService from '../../services/swapi-services';
import Spinner from '../spinner';
export default class RandomPlanet extends Component
{
    SwapiService = new SwapiService();

    state = {
        planet: {}
    };

    constructor() {
        super();
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState({ planet });
    };

    updatePlanet() {
        const id = Math.floor((Math.random() * 20)) + 1;
        this.SwapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded);
    }

    render() {

        const { planet: { id, name, population,
            rotationPeriod, diameter } } = this.state;
        return(
            <div className="random-planet">
                <img
                className="random-planet__img"
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                alt=""/>
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
            </div>
        )
    }   
}