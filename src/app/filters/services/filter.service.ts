import { Injectable } from '@angular/core';

import { PeriodFilterComponent } from './../components/period-filter/period-filter.component';
import { FilterManifest } from './../models/filter-manifest';

const filtersManifest: FilterManifest[] = [
  {
    id: 'period',
    title: 'Period',
    component: PeriodFilterComponent
  }
];

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() {
  }

  getFilters(config: Array<string>) {
    return filtersManifest.filter((value: FilterManifest) => config.includes(value.id));
  }

}
