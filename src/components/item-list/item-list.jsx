import React,{Component} from 'react';
import './item-list.css';
import Spinner from '../spinner';
class ItemList extends Component
{
    state = {
        itemList: null
    }
    componentDidMount()
    {
        this.props.getResouse()
        .then((itemList)=>
            {
                this.setState({itemList});
            }
        );
    }
    _getFomatedItems = (items) =>
    {
        return items.map(({id,name})=>{
            return(
                <div
                    className="item-list__item"
                    key={id}
                    onClick={()=>this.props.onSetItem(id)}
                >
                    {name}
                </div>
            );
            
        })
    }
    render()
    {
        const {itemList} = this.state;
        if (!itemList)
            return <Spinner/>;
        const items = this._getFomatedItems(itemList);
        return(
            <div className="item-list">
                {items}
            </div>
        )
    }
}
export default ItemList;