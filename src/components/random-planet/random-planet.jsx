import React,{Component} from 'react';
import './random-planet.css';

export default class RandomPlanet extends Component
{
    render()
    {
        return(
            <div className="random-planet">
                <img
                className="random-planet__img"
                src="https://cdni.rt.com/russian/images/2017.06/article/594e4840c46188182a8b473a.jpg"
                alt=""/>
                <div className="random-planet__info">
                    <div className="random-planet__name">
                        Planet Name
                    </div>
                    <div className="random-planet__list">
                        <div className="random-planet__list-item">
                            Population 123124
                        </div>
                        <div className="random-planet__list-item">
                            Rotation Period 43
                        </div>
                        <div className="random-planet__list-item">
                            Diametr 100
                        </div>
                    </div>
                </div>
            </div>
        )
    }   
}