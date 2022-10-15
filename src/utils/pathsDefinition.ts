import PathDTO from '../dtos/PathDTO';

const paths1 = [
  {
    startCity: '1',
    endCity: '1',
    cost: 0,
  } as PathDTO,

  {
    startCity: '1',
    endCity: '2',
    cost: 1,
  } as PathDTO,

  {
    startCity: '1',
    endCity: '3',
    cost: 2.2,
  } as PathDTO,

  {
    startCity: '1',
    endCity: '4',
    cost: 2,
  } as PathDTO,

  {
    startCity: '1',
    endCity: '5',
    cost: 4.1,
  } as PathDTO,
] as PathDTO[];

const paths2 = [
  {
    startCity: '2',
    endCity: '1',
    cost: 1,
  } as PathDTO,

  {
    startCity: '2',
    endCity: '2',
    cost: 0,
  } as PathDTO,

  {
    startCity: '2',
    endCity: '3',
    cost: 1.4,
  } as PathDTO,

  {
    startCity: '2',
    endCity: '4',
    cost: 2.2,
  } as PathDTO,

  {
    startCity: '2',
    endCity: '5',
    cost: 4,
  } as PathDTO,
] as PathDTO[];

const paths3 = [
  {
    startCity: '3',
    endCity: '1',
    cost: 2.2,
  } as PathDTO,

  {
    startCity: '3',
    endCity: '2',
    cost: 1.4,
  } as PathDTO,

  {
    startCity: '3',
    endCity: '3',
    cost: 0,
  } as PathDTO,

  {
    startCity: '3',
    endCity: '4',
    cost: 2.2,
  } as PathDTO,

  {
    startCity: '3',
    endCity: '5',
    cost: 3.2,
  } as PathDTO,
] as PathDTO[];

const paths4 = [
  {
    startCity: '4',
    endCity: '1',
    cost: 2,
  } as PathDTO,

  {
    startCity: '4',
    endCity: '2',
    cost: 2.2,
  } as PathDTO,

  {
    startCity: '4',
    endCity: '3',
    cost: 2.2,
  } as PathDTO,

  {
    startCity: '4',
    endCity: '4',
    cost: 0,
  } as PathDTO,

  {
    startCity: '4',
    endCity: '5',
    cost: 2.2,
  } as PathDTO,
] as PathDTO[];

const paths5 = [
  {
    startCity: '5',
    endCity: '1',
    cost: 4.1,
  } as PathDTO,

  {
    startCity: '5',
    endCity: '2',
    cost: 4,
  } as PathDTO,

  {
    startCity: '5',
    endCity: '3',
    cost: 3.2,
  } as PathDTO,

  {
    startCity: '5',
    endCity: '4',
    cost: 2.2,
  } as PathDTO,

  {
    startCity: '5',
    endCity: '5',
    cost: 0,
  } as PathDTO,
] as PathDTO[];

export { paths1, paths2, paths3, paths4, paths5 };
