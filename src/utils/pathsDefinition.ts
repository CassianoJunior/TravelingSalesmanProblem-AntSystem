import CityDTO from "../dtos/CityDTO";

const city1 = {
  id: '1',
  visited: false,
  paths: [
    {
      destinationCity: '1',
      cost: 0,
      pheromone: 1,
    },

    {
      destinationCity: '2',
      cost: 1,
      pheromone: 1,
    },

    {
      destinationCity: '3',
      cost: 2.2,
      pheromone: 1,
    },

    {
      destinationCity: '4',
      cost: 2,
      pheromone: 1,
    },

    {
      destinationCity: '5',
      cost: 4.1,
      pheromone: 1,
    },
  ]
} as CityDTO;
  
const city2 = {
  id: '2',
  visited: false,
  paths: [
    {
      destinationCity: '1',
      cost: 1,
      pheromone: 1,
    },
  
    {
      destinationCity: '2',
      cost: 0,
      pheromone: 1,
    },
    
    {
      destinationCity: '3',
      cost: 1.4,
      pheromone: 1,
    },
    
    {
      destinationCity: '4',
      cost: 2.2,
      pheromone: 1,
    },
    
    {
      destinationCity: '5',
      cost: 4,
      pheromone: 1,
    },
  ]

} as CityDTO;

const city3 = {
  id: '3',
  visited: false,
  paths: [
    {   
      destinationCity: '1',
      cost: 2.2,
      pheromone: 1,
    },
    
    {
      destinationCity: '2',
      cost: 1.4,
      pheromone: 1,
    },
    
    {
      destinationCity: '3',
      cost: 0,
      pheromone: 1,
    },
    
    {
      destinationCity: '4',
      cost: 2.2,
      pheromone: 1,
    },
    
    {
      destinationCity: '5',
      cost: 3.2,
      pheromone: 1,
    },
  ]

} as CityDTO;

const city4 = {
  id: '4',
  visited: false,
  paths: [
    {
      destinationCity: '1',
      cost: 2,
      pheromone: 1,
    },
    
    {
      destinationCity: '2',
      cost: 2.2,
      pheromone: 1,
    },
    
    {
      destinationCity: '3',
      cost: 2.2,
      pheromone: 1,
    },
    
    {
      destinationCity: '4',
      cost: 0,
      pheromone: 1,
    },
    
    {
      destinationCity: '5',
      cost: 2.2,
      pheromone: 1,
    },
  ]
} as CityDTO;

const city5 = {
  id: '5',
  visited: false,
  paths: [
    {
      destinationCity: '1',
      cost: 4.1,
      pheromone: 1,
    },
    
    {
      destinationCity: '2',
      cost: 4,
      pheromone: 1,
    },
    
    {
      destinationCity: '3',
      cost: 3.2,
      pheromone: 1,
    },
    
    {
      destinationCity: '4',
      cost: 2.2,
      pheromone: 1,
    },
    
    {
      destinationCity: '5',
      cost: 0,
      pheromone: 1,
    },
  ]
} as CityDTO;

const allCities = [
  city1,
  city2,
  city3,
  city4,
  city5,
] as Array<CityDTO>;

export default allCities;

