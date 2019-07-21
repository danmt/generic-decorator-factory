import { of, merge } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

export class Categorizer<T> {
  categories: string[] = [];
  errors: string[] = [];

  private getErrors = (item) => this.errors
    .filter((error: string) => this[error])
    .map((error: string) =>
      of(item).pipe(this[error]())
    )

  private getCategories = (item) => this.categories
    .filter((category: string) => this[category])
    .map((category: string) =>
      of(item).pipe(this[category]())
    )

  categorize = () => mergeMap((item: T) =>
    merge(
      ...this.getErrors(item),
      ...this.getCategories(item)
    )
  );
}
