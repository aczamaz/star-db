import React,{Component} from 'react';
import './random-planet.css';
import SwapiService from '../../services/swapi-services';
export default class RandomPlanet extends Component
{
    SwapiService = new SwapiService();
    state = {
        id:null,
        name:null,
        population:null,
        rotationPeriod:null,
        diameter:null
    }
    constructor()
    {
        super();
        this.updatePlanet();
    }
    updatePlanet()
    {
        const id = Math.floor((Math.random()*20))+1;
        this.SwapiService
            .getPlanet(id)
            .then(
                (planet)=>{
                    this.setState({
                        id,
                        name:planet.name,
                        population:planet.population,
                        rotationPeriod:planet.rotation_period,
                        diameter:planet.diameter,
                        img:`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
                    })
        });

    }
    render()
    {
        const { name, population, rotationPeriod, diameter,img } = this.state;
        return(
            <div className="random-planet">
                <img
                className="random-planet__img"
                    src={img}
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