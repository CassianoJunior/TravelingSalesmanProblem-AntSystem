import AntSystemDTO from '../dtos/AntSystemDTO';
import {
  generateCities,
  generatePathsForInstance,
  spreadAntsForCities,
} from '../utils/setParameters';

export class AntSystem {
  execute({
    instance,
    antAmount,
    iterations,
    alpha,
    beta,
    rho,
    q,
  }: AntSystemDTO) {
    const cities = generateCities(instance);
    const paths = generatePathsForInstance(instance);
    const ants = spreadAntsForCities(instance, antAmount);
  }
}
