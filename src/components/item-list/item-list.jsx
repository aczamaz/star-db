import React,{Component} from 'react';
import './item-list.css';

class ItemList extends Component
{
    render()
    {
        return(
            <div className="item-list">
                <div className="item-list__item">
                    Luke Skywalker
                </div>
                <div className="item-list__item">
                    Dart Vader
                </div>
                <div className="item-list__item">
                    R2-D2
                </div>
            </div>
        )
    }
}
export default ItemList;