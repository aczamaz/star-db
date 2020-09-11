import ItemList from '../item-list';
import {withData,withSwapiService} from '../hoc-helper';

const mapPersonMethodToProps = (swapiService)=>
{
    return{
        getData: swapiService.getAllPeople
    }
}
const mapStartshipMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
}
const mapPlanetMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
}
const StartshipList = withSwapiService(mapStartshipMethodToProps)
(
    withData(ItemList)
);
const PersonList = withSwapiService(mapPersonMethodToProps)
(
    withData(ItemList)
);
const PlanetList = withSwapiService(mapPlanetMethodToProps)
(
    withData(ItemList)
);


export
{
    StartshipList,
    PersonList,
    PlanetList
};