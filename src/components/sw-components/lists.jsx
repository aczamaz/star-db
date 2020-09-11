import ItemList from '../item-list';
import {
    withData,
    withSwapiService,
    compose
} from '../hoc-helper';

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
const StartshipList = compose(
  withSwapiService(mapStartshipMethodToProps),
  withData
)(ItemList);
const PersonList = compose(
  withSwapiService(mapPersonMethodToProps),
  withData
)(ItemList);
const PlanetList = compose(
  withSwapiService(mapPlanetMethodToProps),
  withData
)(ItemList);


export
{
    StartshipList,
    PersonList,
    PlanetList
};