import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';
import {withSwapiService} from '../hoc-helper';
const PersonDetail = ({ itemId, swapiService }) =>
{
    const {getPerson} = swapiService;
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
export default withSwapiService(PersonDetail);