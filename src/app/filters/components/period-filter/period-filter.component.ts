import { ControlContainer, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Filter } from './../../models/filter';

@Component({
  selector: 'app-period-filter',
  templateUrl: './period-filter.component.html',
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class PeriodFilterComponent implements OnInit, Filter {

  constructor() {
  }

  ngOnInit() {
  }

}
