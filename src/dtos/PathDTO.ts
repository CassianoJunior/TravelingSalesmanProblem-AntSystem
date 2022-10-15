export default interface PathDTO {
  startCity: string;
  endCity: string;
  cost: number;
  pheromone?: number;
  probability?: number;
}