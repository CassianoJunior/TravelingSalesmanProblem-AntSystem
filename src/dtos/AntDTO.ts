import CityDTO from './CityDTO';

export default interface AntDTO {
  id: string;
  startingPoint: string;
  cities: Array<CityDTO>;
  totalCost?: number;
}