import React,{Component} from 'react';
import './person-details.css';

export default class PersonDetails extends Component
{
    render()
    {
        return(
            <div className="person-details">
                <img
                className="person-details__img"
                src="https://cdni.rt.com/russian/images/2017.06/article/594e4840c46188182a8b473a.jpg"
                alt=""/>
                <div className="person-details__info">
                    <div className="person-details__name">
                        Planet Name
                    </div>
                    <div className="person-details__list">
                        <div className="person-details__list-item">
                            Population 123124
                        </div>
                        <div className="person-details__list-item">
                            Rotation Period 43
                        </div>
                        <div className="person-details__list-item">
                            Diametr 100
                        </div>
                    </div>
                </div>
            </div>
        )
    }   
}