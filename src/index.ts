import Ant from './classes/Ant';
import allCities from './utils/pathsDefinition'

const ant1 = new Ant("1", "1", allCities);
const ant2 = new Ant("2", "2", allCities);
const ant3 = new Ant("3", "3", allCities);
const ant4 = new Ant("4", "4", allCities);
const ant5 = new Ant("5", "5", allCities);

ant1.showPaths();
ant1.calculateProb(ant1.startingPoint);
const firstCitySelected = ant1.selectCity(ant1.startingPoint);
console.log(firstCitySelected);

ant1.calculateProb(firstCitySelected.id);
const secondCitySelected = ant1.selectCity(firstCitySelected.id);
console.log(secondCitySelected);

ant1.calculateProb(secondCitySelected.id);
const thirdCitySelected = ant1.selectCity(secondCitySelected.id);
console.log(thirdCitySelected);

ant1.calculateProb(thirdCitySelected.id);
const fourthCitySelected = ant1.selectCity(thirdCitySelected.id);
console.log(fourthCitySelected);

console.log(ant1.totalCost);