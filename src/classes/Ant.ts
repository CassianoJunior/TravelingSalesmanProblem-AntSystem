import AntDTO from '../dtos/AntDTO';
import weighted = require('weighted');
import CityDTO from "../dtos/CityDTO";
import PathDTO from '../dtos/PathDTO';

export default class Ant implements AntDTO {
  id: string;
  cities: Array<CityDTO>;
  partialSolution: Array<CityDTO> = [];
  startingPoint: string;
  totalCost?: number;

  constructor(id: string, startingPoint: string, paths: Array<CityDTO>){
    this.id = id;
    this.cities = paths;
    this.startingPoint = startingPoint;
    this.totalCost = 0;

    const firstCity = this.getCity(startingPoint);
    firstCity.visited = true;
    this.partialSolution.push(firstCity);
  }
  
  private getCity(cityId: string): CityDTO {
    return this.cities.find(city => city.id === cityId);
  }

  private getCityPaths(cityId: string): Array<PathDTO>{
    const startCity = this.cities.find(city => city.id === cityId);
    return startCity.paths;
  }

  public calculateTotalCost(actualCityId: string, nextCityToVisitedId: string): void{
    const pathsActualCity = this.getCityPaths(actualCityId);
    const costToCity = pathsActualCity.find(path => path.destinationCity === nextCityToVisitedId).cost;
    
    this.totalCost += costToCity;
  }

  public selectCity(actualCityId: string): CityDTO{
    const pathsCity = this.getCityPaths(actualCityId);
    const pathsProbabilities = pathsCity.map(path => path.probability);

    const pathSelected = weighted.select(pathsCity, pathsProbabilities);
    const citySelected = this.getCity(pathSelected.destinationCity);
    
    citySelected.visited = true;
    this.partialSolution.push(citySelected);

    this.calculateTotalCost(actualCityId, citySelected.id);

    return citySelected;
  }

  public getCitiesUnvisited(actualCityId: string): CityDTO[]{
    const citiesUnvisited = this.cities.filter(city => city.id !== actualCityId && !city.visited);

    return citiesUnvisited;
  }

  private heuristicPheromoneProduct(cost:number, pheromone:number, pheromoneInfluence: number, heuristicInfluence: number): number{
    const heuristicValue = 1 / cost;
    const totalPheromone = Math.pow(pheromone, pheromoneInfluence);
    const totalHeuristic = Math.pow(heuristicValue, heuristicInfluence);

    return totalPheromone * totalHeuristic;
  }

  public getCitiesUnvisitedSummation(actualCityId: string, pheromoneInfluence: number, heuristicInfluence: number): number{
    const citiesUnvisitedId = this.getCitiesUnvisited(actualCityId).map(city => city.id);
    const pathsActualCity = this.getCityPaths(actualCityId);
    const pathsCitiesUnvisited = pathsActualCity.filter(path => citiesUnvisitedId.find(cityId => path.destinationCity === cityId));
    // const pathsCitiesUnvisited: PathDTO[] = [];
    // pathsActualCity.forEach(path => {
    //   citiesUnvisitedId.forEach(cityId =>{
    //     if(path.destinationCity === cityId){
    //       pathsCitiesUnvisited.push(path);
    //     }
    //   })
    // })
    
    let summation = 0;
    pathsCitiesUnvisited.forEach(pathsCitiesUnvisited => {
      if(pathsCitiesUnvisited.cost <= 0) return;

      summation += this.heuristicPheromoneProduct(pathsCitiesUnvisited.cost, pathsCitiesUnvisited.pheromone, pheromoneInfluence, heuristicInfluence);
      
    });

    return summation;
  }

  public calculateProb(actualCityId: string, pheromoneInfluence: number=1, heuristicInfluence: number=1): void{
    const paths = this.getCityPaths(actualCityId);
    paths.forEach(path => {
      const destinationCity = this.cities.find(city => city.id === path.destinationCity);
      if(path.cost <= 0 || destinationCity.visited){
        path.probability = 0;
        return;
      }

      const heuristicPheromoneProduct = this.heuristicPheromoneProduct(path.cost, path.pheromone, pheromoneInfluence, heuristicInfluence);
      const citiesUnvisitedHeuristicPheromoneProduct = this.getCitiesUnvisitedSummation(actualCityId, pheromoneInfluence, heuristicInfluence);

      path.probability = heuristicPheromoneProduct / citiesUnvisitedHeuristicPheromoneProduct;
    });
  }

  public showPaths(){
    this.cities.forEach(city => {
      console.log(`Cidade ${city.id}:`);
      
      city.paths.forEach(path => {
        console.log(path);
      })

      console.log();
    })
  }
}