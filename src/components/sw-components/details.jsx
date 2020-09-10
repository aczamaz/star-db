import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';
import SwapiService from '../../services/swapi-services';

const swapiService = new SwapiService();
const { getPlanet, getStarship, getPerson } = swapiService;

const StartshipDetail = ({itemId}) => 
{
    return (
        <ItemDetails
            itemId={itemId}
            getData={getStarship}
        >
            <Record label="Model" field="model" />
            <Record label="Length" field="length" />
            <Record label="Manufacturer" field="manufacturer" />
        </ItemDetails>
    );
};
const PersonDetail = ({ itemId }) =>
{
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPerson}
        >
            <Record label="gender" field="gender" />
            <Record label="birth year" field="birthYear" />
            <Record label="eye color" field="eyeColor" />
        </ItemDetails>
    );
};
const PlanetDetail = ({ itemId }) =>
{
    return (
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


export {
    StartshipDetail,
    PersonDetail,
    PlanetDetail
};