import { of, merge } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Weapon } from '../shared/model/weapon.model';
import { Categorizer } from '../shared/model/categorizer.model';
import { ErrorMessage } from '../shared/const/error.enum';
import { Distance } from '../shared/const/distance.enum';
import { Category } from './category.decorator';
import { ErrorThrower } from '../shared/decorators/error-thrower.decorator';

enum DistanceCategories {
  Short = 'short',
  Medium = 'medium',
  Long = 'long',
  VeryLong = 'veryLong',
};

enum ErrorNames {
  InvalidDistance = 'invalidDistance',
};

export class WeaponCategorizer extends Categorizer<Weapon> {
  categories = [
    DistanceCategories.Short, 
    DistanceCategories.Medium, 
    DistanceCategories.Long, 
    DistanceCategories.VeryLong
  ];
  errors = [
    ErrorNames.InvalidDistance
  ];

  @ErrorThrower((weapon: Weapon) => weapon.distance < 1)
  private invalidDistance() {
    return ErrorMessage.InvalidDistance as any;
  }

  @Category((weapon: Weapon) => weapon.distance === 1)
  private short() {
    return Distance.Short as any;
  }

  @Category(
    (weapon: Weapon) => weapon.distance > 1 && weapon.distance < 4
  ) private medium() {
    return Distance.Medium as any;
  }

  @Category(
    (weapon: Weapon) => weapon.distance > 3 && weapon.distance < 8
  ) private long() {
    return Distance.Long as any;
  }

  @Category((weapon: Weapon) => weapon.distance > 7)
  private veryLong() {
    return Distance.VeryLong as any;
  }
}