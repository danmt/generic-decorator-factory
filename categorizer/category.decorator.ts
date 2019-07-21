import { pipe } from 'rxjs';
import { filter, mapTo } from 'rxjs/operators';

export function Category(condition: (...args) => boolean) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const value = descriptor.value();
    descriptor.value = (...args: any[]) => pipe(
      filter(condition),
      mapTo(value)
    );
  }
}