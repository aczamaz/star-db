import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';
import { withSwapiService } from '../hoc-helper';
const StartshipDetail = (props) => 
{
    return(
        <ItemDetails {...props}>
            <Record label="Model" field="model" />
            <Record label="Length" field="length" />
            <Record label="Manufacturer" field="manufacturer" />
        </ItemDetails>
    )
             
};
const mapMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship
    }
};
export default withSwapiService(mapMethodToProps)(StartshipDetail);