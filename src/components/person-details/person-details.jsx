import React,{Component} from 'react';
import './person-details.css';
import SwapiService from '../../services/swapi-services';

export default class PersonDetails extends Component
{
    SwapiService = new SwapiService();
    state =
    {
        person:null
    }
    componentDidMount()
    {
        this.updatePerson()
    }
    componentDidUpdate(prevProps)
    {
        if (this.props.itemId !== prevProps.itemId)
        {
            this.updatePerson();
        }
    }
    updatePerson()
    {
        const personId = this.props.itemId;
        if (!personId)
            return;
        console.log(personId);
        this.SwapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({ person });
            })
    }
    render()
    {
        if(!this.state.person)
            return (<div className="person-details"><span>choise item please...</span></div>)

        const { id, name, gender, birthYear, eyeColor} = this.state.person;

        return(
            <div className="person-details">
                <img
                className="person-details__img"
                    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                alt=""/>
                <div className="person-details__info">
                    <div className="person-details__name">
                        {name}
                    </div>
                    <div className="person-details__list">
                        <div className="person-details__list-item">
                            getder {gender}
                        </div>
                        <div className="person-details__list-item">
                            birth year {birthYear}
                        </div>
                        <div className="person-details__list-item">
                            eye color {eyeColor}
                        </div>
                    </div>
                </div>
            </div>
        )
    }   
}