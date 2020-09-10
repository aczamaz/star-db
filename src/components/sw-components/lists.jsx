import ItemList from '../item-list';
import SwapiService from '../../services/swapi-services';
import {withData} from '../hoc-helper';

const swapiService = new SwapiService();
const {getAllPlanets,getAllStarships,getAllPeople} = swapiService;

const StartshipList = withData(ItemList, getAllStarships);
const PersonList = withData(ItemList, getAllPeople);;
const PlanetList = withData(ItemList, getAllPlanets);


export
{
    StartshipList,
    PersonList,
    PlanetList
};