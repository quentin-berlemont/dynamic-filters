import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { FiltersComponent } from './containers/filters/filters.component';
import { FiltersModalComponent } from './containers/filters-modal/filters-modal.component';
import { PeriodFilterComponent } from './components/period-filter/period-filter.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    FiltersComponent,
    FiltersModalComponent,
    PeriodFilterComponent
  ],
  entryComponents: [
    FiltersModalComponent,
    PeriodFilterComponent
  ],
  exports: [
    FiltersComponent
  ]
})
export class FiltersModule {
}
