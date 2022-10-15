import CityDTO from '../dtos/CityDTO';
import PathDTO from '../dtos/PathDTO';

export const spreadAntsForCities = (
  instance: Array<Array<number>>,
  antAmount: number = instance.length
) => {
  const cities = generateCities(instance);
  const ants = [];
  const antsPerCity = Math.floor(antAmount / cities.length);
  const antsLeft = antAmount % cities.length;

  for (let i = 0; i < cities.length; i++) {
    for (let j = 0; j < antsPerCity; j++) {
      ants.push(i);
    }
  }

  for (let i = 0; i < antsLeft; i++) {
    ants.push(i);
  }

  cities.forEach((city, index) => {
    city.antAmount = ants.filter((ant) => ant === index).length;
  });

  return cities;
};

export const generatePathsForInstance = (instance: Array<Array<number>>) => {
  const paths = {};
  instance.forEach((row, rowIndex) => {
    const path = [] as PathDTO[];
    row.forEach((column, columnIndex) => {
      path.push({
        startCity: `${rowIndex + 1}`,
        endCity: `${columnIndex + 1}`,
        cost: column,
      } as PathDTO);
    });
    paths[`city${rowIndex + 1}`] = path;
  });

  return paths;
};

export const generateCities = (instance: Array<Array<number>>) => {
  const cities = [] as CityDTO[];

  instance.forEach((_, rowIndex) => {
    cities.push({
      id: rowIndex + 1,
      antAmount: 0,
    });
  });

  return cities;
};
