import PathDTO from "./PathDTO";

export default interface CityDTO {
  id: string;
  visited: boolean;
  paths: Array<PathDTO>;
}