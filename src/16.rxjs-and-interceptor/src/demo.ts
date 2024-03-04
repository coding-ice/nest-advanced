import { of, filter, map, scan } from 'rxjs';

of(1, 2, 3)
  .pipe(map((x) => x * x))
  .pipe(filter((x) => x % 2 !== 0))
  .subscribe((v) => console.log(`value:${v}`));

const n = of(1, 2, 3);
n.pipe(scan((total, n) => total + n)).subscribe(console.log);
