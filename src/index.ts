import Ant from './classes/Ant';

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

const ant1 = new Ant('1', paths1);
const ant2 = new Ant('2', paths2);
const ant3 = new Ant('3', paths3);
const ant4 = new Ant('4', paths4);
const ant5 = new Ant('5', paths5);

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
