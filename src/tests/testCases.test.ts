import {
  paths1,
  paths2,
  paths3,
  paths4,
  paths5,
} from '../utils/pathsDefinition';
import {
  generatePathsForInstance,
  spreadAntsForCities,
} from '../utils/setParameters';

import { describe, expect, it } from 'vitest';

describe('test for paths', () => {
  it('should return the correct paths', () => {
    const instance = [
      [0, 1, 2.2, 2, 4.1],
      [1, 0, 1.4, 2.2, 4],
      [2.2, 1.4, 0, 2.2, 3.2],
      [2, 2.2, 2.2, 0, 2.2],
      [4.1, 4, 3.2, 2.2, 0],
    ];

    const paths = generatePathsForInstance(instance);
    for (let key in paths) {
      if (key === 'city1') {
        expect(paths[key]).toEqual(paths1);
      } else if (key === 'city2') {
        expect(paths[key]).toEqual(paths2);
      } else if (key === 'city3') {
        expect(paths[key]).toEqual(paths3);
      } else if (key === 'city4') {
        expect(paths[key]).toEqual(paths4);
      } else if (key === 'city5') {
        expect(paths[key]).toEqual(paths5);
      }
    }
  });
});

describe('tests for ants', () => {
  it('should return one ant for city', () => {
    const instance = [
      [0, 1, 2.2, 2, 4.1],
      [1, 0, 1.4, 2.2, 4],
      [2.2, 1.4, 0, 2.2, 3.2],
      [2, 2.2, 2.2, 0, 2.2],
      [4.1, 4, 3.2, 2.2, 0],
    ];

    const cities = spreadAntsForCities(instance, 5);
    cities.forEach((city) => {
      expect(city.antAmount).toBe(1);
    });
  });

  it('should return two ants for city', () => {
    const instance = [
      [0, 1, 2.2, 2, 4.1],
      [1, 0, 1.4, 2.2, 4],
      [2.2, 1.4, 0, 2.2, 3.2],
      [2, 2.2, 2.2, 0, 2.2],
      [4.1, 4, 3.2, 2.2, 0],
    ];

    const cities = spreadAntsForCities(instance, 10);
    cities.forEach((city) => {
      expect(city.antAmount).toBe(2);
    });
  });

  it('should return the correct ant amount for each city', () => {
    const instance = [
      [0, 1, 2.2, 2, 4.1],
      [1, 0, 1.4, 2.2, 4],
      [2.2, 1.4, 0, 2.2, 3.2],
      [2, 2.2, 2.2, 0, 2.2],
      [4.1, 4, 3.2, 2.2, 0],
    ];

    const cities = spreadAntsForCities(instance, 13);
    expect(cities[0].antAmount).toBe(3);
    expect(cities[1].antAmount).toBe(3);
    expect(cities[2].antAmount).toBe(3);
    expect(cities[3].antAmount).toBe(2);
    expect(cities[4].antAmount).toBe(2);
  });

  it('should return one ant for city when antAmount not passed', () => {
    const instance = [
      [0, 1, 2.2, 2, 4.1],
      [1, 0, 1.4, 2.2, 4],
      [2.2, 1.4, 0, 2.2, 3.2],
      [2, 2.2, 2.2, 0, 2.2],
      [4.1, 4, 3.2, 2.2, 0],
    ];

    const cities = spreadAntsForCities(instance);
    cities.forEach((city) => {
      expect(city.antAmount).toBe(1);
    });
  });
});
