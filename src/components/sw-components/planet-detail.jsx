import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';
import {withSwapiService} from '../hoc-helper';
const PlanetDetail = (props) =>
{
    return(
        <ItemDetails {...props}>
            <Record label="Population" field="population" />
            <Record label="Rotation period" field="rotationPeriod" />
            <Record label="Diameter" field="diameter" />
        </ItemDetails>
    );
};
const mapMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet
    }
} 

export default withSwapiService(PlanetDetail,mapMethodToProps);