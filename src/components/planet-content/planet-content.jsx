import React from 'react'
import './planet-content.css';
const PlanetContent = ({ planet }) => {
    const { id, name, population,
        rotationPeriod, diameter } = planet;
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
export default PlanetContent;