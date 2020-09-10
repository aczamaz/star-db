import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';
import {withSwapiService} from '../hoc-helper';
const PlanetDetail = ({ itemId, swapiService }) =>
{
    const { getPlanet } = swapiService;
    return(
        <ItemDetails
            itemId={itemId}
            getData={getPlanet}
        >
            <Record label="Population" field="population" />
            <Record label="Rotation period" field="rotationPeriod" />
            <Record label="Diameter" field="diameter" />
        </ItemDetails>
    );
};


export default withSwapiService(PlanetDetail);