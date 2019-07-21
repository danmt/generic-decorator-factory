import { from, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { WeaponCategorizer } from './categorizer';
import { Weapon } from './shared/model/weapon.model';

// BASIC DATA
const weapons: Weapon[] = [
  new Weapon('Knife', 1),
  new Weapon('Machete', 1),
  new Weapon('Bow', 3),
  new Weapon('Glock 9mm', 6),
  new Weapon('MP5', 9),
  new Weapon('Barret .50', 12)
];

const categorizer = new WeaponCategorizer();

// USAGES
from(weapons).pipe(
  categorizer.categorize()
).subscribe(
  (next) => console.log(next),
  (error) => console.log(error)
);