import toPairs from 'ramda/es/toPairs';

export function MapToList<T>(items: { [id: string]: T }): any {
  return toPairs(items).map((pair) => ({ id: pair[0], ...pair[1] }));
}

export function ListToMap<T>(items: T[]): any {
  if (!items || !items.forEach) return {};
  const obj: { [id: string]: T } = {};
  items.forEach((item: any) => {
    obj[item.id] = item;
  });
  return obj;
}
