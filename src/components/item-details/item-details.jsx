import React,{Component} from 'react';
import './item-details.css';
import SwapiService from '../../services/swapi-services';

export default class ItemDetails extends Component
{
    SwapiService = new SwapiService();
    state =
    {
        item:null
    }
    componentDidMount()
    {
        this.updateItem()
    }
    componentDidUpdate(prevProps)
    {
        if (this.props.itemId !== prevProps.itemId)
        {
            this.updateItem();
        }
    }
    updateItem()
    {
        const { itemId, getData} = this.props;
        if (!itemId)
            return;
        getData(itemId)
            .then((item) => {
                this.setState({ item });
            })
    }
    render()
    {
        if(!this.state.item)
            return (<div className="item-details"><span>choise item please...</span></div>)

        const { id, name, gender, birthYear, eyeColor, image} = this.state.item;

        return(
            <div
                className="item-details"
                key={id}
            >
                <img
                className="item-details__img"
                    src={image}
                alt=""/>
                <div className="item-details__info">
                    <div className="item-details__name">
                        {name}
                    </div>
                    <div className="item-details__list">
                        <div className="item-details__list-item">
                            getder {gender}
                        </div>
                        <div className="item-details__list-item">
                            birth year {birthYear}
                        </div>
                        <div className="item-details__list-item">
                            eye color {eyeColor}
                        </div>
                    </div>
                </div>
            </div>
        )
    }   
}