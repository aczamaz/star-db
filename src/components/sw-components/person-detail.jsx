import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';
import {withSwapiService} from '../hoc-helper';
const PersonDetail = (props) =>
{
    return (
        <ItemDetails {...props}>
            <Record label="gender" field="gender" />
            <Record label="birth year" field="birthYear" />
            <Record label="eye color" field="eyeColor" />
        </ItemDetails>
    );
};
const mapMethodToProps = (swapiService) =>
{
    return{
        getData:swapiService.getPerson
    }
} 
export default withSwapiService(mapMethodToProps)(PersonDetail);