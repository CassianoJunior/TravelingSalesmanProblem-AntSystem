export default interface PathDTO {
  startAnt: string;
  endAnt: string;
  cost: number;
  pheromone?: number;
  probability?: number;
}