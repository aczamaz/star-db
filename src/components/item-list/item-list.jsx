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
                <div className="item-list__item">
                    Romi Rain
                </div>
                <div className="item-list__item">
                    Lisa Ann
                </div>
                <div className="item-list__item">
                    Sasha grey
                </div>
            </div>
        )
    }
}
export default ItemList;