import Path from "../dtos/PathDTO";
import AntDTO from '../dtos/AntDTO';

export default class Ant implements AntDTO {
  id: string;
  paths: Path[];
  totalCost?: number;

  constructor(id: string, paths: Path[]){
    this.id = id;
    this.paths = paths;
    this.calculateCost(paths);
  }
  
  public calculateCost(paths: Path[]){
    this.totalCost = 0;
    paths.forEach(path => {
      this.totalCost += path.cost; 
    });
  }

  public showPaths(){
    this.paths.forEach(path => {
      console.log(path);
    })
  }
}