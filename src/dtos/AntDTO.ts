import Path from './PathDTO';

export default interface AntDTO {
  id: string;
  paths: Path[];
  totalCost?: number;
}