import Ant from './classes/Ant';
import allCities from './utils/pathsDefinition'
import {
  paths1,
  paths2,
  paths3,
  paths4,
  paths5,
} from './utils/pathsDefinition';

import {
  generatePathsForInstance,
  spreadAntsForCities,
} from './utils/setParameters';

const ant1 = new Ant("1", "1", allCities);
const ant2 = new Ant("2", "2", allCities);
const ant3 = new Ant("3", "3", allCities);
const ant4 = new Ant("4", "4", allCities);
const ant5 = new Ant("5", "5", allCities);

// ant1.showPaths();
// ant1.calculateProb(ant1.startingPoint);
// const firstCitySelected = ant1.selectCity(ant1.startingPoint);
// console.log(firstCitySelected);

// ant1.calculateProb(firstCitySelected.id);
// const secondCitySelected = ant1.selectCity(firstCitySelected.id);
// console.log(secondCitySelected);

// ant1.calculateProb(secondCitySelected.id);
// const thirdCitySelected = ant1.selectCity(secondCitySelected.id);
// console.log(thirdCitySelected);

// ant1.calculateProb(thirdCitySelected.id);
// const fourthCitySelected = ant1.selectCity(thirdCitySelected.id);
// console.log(fourthCitySelected);

// console.log(ant1.totalCost);

ant1.findBestPath(2);

const instance = [
  [0, 1, 2.2, 2, 4.1],
  [1, 0, 1.4, 2.2, 4],
  [2.2, 1.4, 0, 2.2, 3.2],
  [2, 2.2, 2.2, 0, 2.2],
  [4.1, 4, 3.2, 2.2, 0],
];

const paths = generatePathsForInstance(instance);
for (let key in paths) {
  console.log(key);
}
spreadAntsForCities(instance, 5);
