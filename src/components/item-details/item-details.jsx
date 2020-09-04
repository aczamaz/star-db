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
        const { item } = this.state;
        const { id, name, image} = item;

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
                        {
                            React.Children.map(this.props.children,(child)=>
                                {
                                return React.cloneElement(child, { item})
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }   
}