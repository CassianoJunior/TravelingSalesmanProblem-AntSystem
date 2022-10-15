import PathDTO from "../dtos/PathDTO";

const paths1 = [
    {
      startAnt: '1',
      endAnt: '1',
      cost: 0,
    } as PathDTO,
  
    {
      startAnt: '1',
      endAnt: '2',
      cost: 1,
    } as PathDTO,
  
    {
      startAnt: '1',
      endAnt: '3',
      cost: 2.2,
    } as PathDTO,
  
    {
      startAnt: '1',
      endAnt: '4',
      cost: 2,
    } as PathDTO,
  
    {
      startAnt: '1',
      endAnt: '5',
      cost: 4.1,
    } as PathDTO,
    
  ] as PathDTO[];
  
const paths2 = [
{
    startAnt: '2',
    endAnt: '1',
    cost: 1,
} as PathDTO,

{
    startAnt: '2',
    endAnt: '2',
    cost: 0,
} as PathDTO,

{
    startAnt: '2',
    endAnt: '3',
    cost: 1.4,
} as PathDTO,

{
    startAnt: '2',
    endAnt: '4',
    cost: 2.2,
} as PathDTO,

{
    startAnt: '2',
    endAnt: '5',
    cost: 4,
} as PathDTO,

] as PathDTO[];

const paths3 = [
{
    startAnt: '3',
    endAnt: '1',
    cost: 2.2,
} as PathDTO,

{
    startAnt: '3',
    endAnt: '2',
    cost: 1.4,
} as PathDTO,

{
    startAnt: '3',
    endAnt: '3',
    cost: 0,
} as PathDTO,

{
    startAnt: '3',
    endAnt: '4',
    cost: 2.2,
} as PathDTO,

{
    startAnt: '3',
    endAnt: '5',
    cost: 3.2,
} as PathDTO,

] as PathDTO[];

const paths4 = [
{
    startAnt: '4',
    endAnt: '1',
    cost: 2,
} as PathDTO,

{
    startAnt: '4',
    endAnt: '2',
    cost: 2.2,
} as PathDTO,

{
    startAnt: '4',
    endAnt: '3',
    cost: 2.2,
} as PathDTO,

{
    startAnt: '4',
    endAnt: '4',
    cost: 0,
} as PathDTO,

{
    startAnt: '4',
    endAnt: '5',
    cost: 2.2,
} as PathDTO,

] as PathDTO[];

const paths5 = [
{
    startAnt: '5',
    endAnt: '1',
    cost: 4.1,
} as PathDTO,

{
    startAnt: '5',
    endAnt: '2',
    cost: 4,
} as PathDTO,

{
    startAnt: '5',
    endAnt: '3',
    cost: 3.2,
} as PathDTO,

{
    startAnt: '5',
    endAnt: '4',
    cost: 2.2,
} as PathDTO,

{
    startAnt: '5',
    endAnt: '5',
    cost: 0,
} as PathDTO,

] as PathDTO[];

export { paths1, paths2, paths3, paths4, paths5 }