import CityDTO from './CityDTO';

export default interface AntDTO {
  id: string;
  startingPoint: CityDTO;
  cities: Array<CityDTO>;
  totalCost?: number;
}