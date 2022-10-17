export default interface AntSystemDTO {
  instance: Array<Array<number>>;
  antAmount?: number;
  iterations: number;
  alpha: number;
  beta: number;
  rho: number;
  q: number;
}
