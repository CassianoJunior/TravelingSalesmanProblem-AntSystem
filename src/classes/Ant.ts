import Path from "../dtos/PathDTO";
import AntDTO from '../dtos/AntDTO';
import weighted from "weighted";

export default class Ant implements AntDTO {
  id: string;
  paths: Path[];
  totalCost?: number;

  constructor(id: string, paths: Path[]){
    this.id = id;
    this.paths = paths;
    this.calculateCost();

    this.resetPherome();
  }
  
  private resetPherome(): void{
    this.paths.forEach(path => {
      path.pheromone = 1;
    });
  }

  public calculateCost(): void{
    this.totalCost = 0;
    this.paths.forEach(path => {
      this.totalCost += path.cost; 
    });
  }

  public selectCity(): Path{
    let pathsProbabilities: number[];
    this.paths.forEach(path => {
      pathsProbabilities.push(path.probability);
    })

    const citySelected = weighted.select(this.paths, pathsProbabilities);
    this.paths.forEach(path => {
      if(path.endCity === citySelected.endCity){
        //needImplement
      }
    })

    return citySelected;
  }

  public getCitiesUnvisited(): Path[]{
    //Not implemented yet
    return this.paths;
  }

  private heuristicPheromoneProduct(cost:number, pheromone:number, pheromoneInfluence: number, heuristicInfluence: number): number{
    const heuristicValue = 1 / cost;
    const totalPheromone = Math.pow(pheromone, pheromoneInfluence);
    const totalHeuristic = Math.pow(heuristicValue, heuristicInfluence);

    return totalPheromone * totalHeuristic;
  }

  public getCitiesUnvisitedSummation(pheromoneInfluence: number, heuristicInfluence: number): number{
    const paths = this.getCitiesUnvisited();
    
    let summation = 0;
    paths.forEach(path => {
      summation += this.heuristicPheromoneProduct(path.cost, path.pheromone, pheromoneInfluence, heuristicInfluence);
    });

    return summation;
  }

  public calculateProb(pheromoneInfluence: number=1, heuristicInfluence: number=1): void{
    this.paths.forEach(path => {
      const heuristicPheromoneProduct = this.heuristicPheromoneProduct(path.cost, path.pheromone, pheromoneInfluence, heuristicInfluence);
      const citiesUnvisitedHeuristicPheromoneProduct = this.getCitiesUnvisitedSummation(pheromoneInfluence, heuristicInfluence);

      path.probability = heuristicPheromoneProduct / citiesUnvisitedHeuristicPheromoneProduct;
    });
  }

  public showPaths(){
    this.paths.forEach(path => {
      console.log(path);
    })
  }
}