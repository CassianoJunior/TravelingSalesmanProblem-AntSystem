import Ant from './classes/Ant';

import {paths1, paths2, paths3, paths4, paths5} from './utils/pathsDefinition'

const ant1 = new Ant("1", paths1);
const ant2 = new Ant("2", paths2);
const ant3 = new Ant("3", paths3);
const ant4 = new Ant("4", paths4);
const ant5 = new Ant("5", paths5);

ant1.showPaths();
console.log(ant1.totalCost);
console.log(ant1.paths.at(0).pheromone);