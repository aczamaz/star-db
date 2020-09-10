import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';
import { withSwapiService } from '../hoc-helper';
const StartshipDetail = ({itemId, swapiService}) => 
{
    const {getStarship} = swapiService;
    return(
        <ItemDetails
            itemId={itemId}
            getData={getStarship}
        >
            <Record label="Model" field="model" />
            <Record label="Length" field="length" />
            <Record label="Manufacturer" field="manufacturer" />
        </ItemDetails>
    )
             
};

export default withSwapiService(StartshipDetail);