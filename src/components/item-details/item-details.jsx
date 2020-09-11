import React,{Component} from 'react';
import './item-details.css';
import SwapiService from '../../services/swapi-services';
import Spinner from "../spinner";
import ErrorMessage from "../error-message";
export default class ItemDetails extends Component
{
    SwapiService = new SwapiService();
    state =
    {
        item:null,
        loading:false,
        error:false
    }
    componentDidMount()
    {
        this.updateItem()
    }
    componentDidUpdate(prevProps)
    {
        if (this.props.itemId !== prevProps.itemId ||
            this.props.getData !== prevProps.getData)
        {
            this.updateItem();
        }
    }
    updateItem()
    {
        const { itemId, getData} = this.props;
        if (!itemId)
            return;
        this.setState({loading:true});
        getData(itemId)
            .then(
                (item) =>
                {
                    this.setState({ item });
                    this.setState({loading:false});
                }
            ).catch(
                this.setState({error:true})
            )
    }
    render()
    {
        if(!this.state.item)
            return (<div className="item-details"><span>choise item please...</span></div>)
        const { item,loading,error } = this.state;
        const { id, name, image} = item;
        if(!error)
            return <ErrorMessage/>;
        if(loading)
            return <Spinner/>
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