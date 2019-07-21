import { pipe, throwError } from 'rxjs';
import { filter, mergeMapTo } from 'rxjs/operators';

export function ErrorThrower(condition: (...args) => boolean) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const value = descriptor.value();
    descriptor.value = (...args: any[]) => pipe(
      filter(condition),
      mergeMapTo(throwError(value))
    );
  }
}
