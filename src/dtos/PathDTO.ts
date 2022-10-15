export default interface PathDTO {
  startCity: string;
  endCity: string;
  cost: number;
  visited: boolean;
  pheromone?: number;
  probability?: number;
}