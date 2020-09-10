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
const StartshipList = withSwapiService(withData(ItemList),mapStartshipMethodToProps);
const PersonList = withSwapiService(withData(ItemList),mapPersonMethodToProps);
const PlanetList = withSwapiService(withData(ItemList),mapPlanetMethodToProps);


export
{
    StartshipList,
    PersonList,
    PlanetList
};