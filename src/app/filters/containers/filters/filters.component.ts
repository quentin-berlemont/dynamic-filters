import { FilterService } from './../../services/filter.service';
import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FiltersModalComponent } from './../filters-modal/filters-modal.component';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html'
})
export class FiltersComponent implements OnInit {
  @Input() config: Array<string> = [];
  @Input() values: any;
  @Output() filter: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private modalService: NgbModal,
    private filterService: FilterService
  ) {
  }

  ngOnInit() {
  }

  get filters() {
    return this.filterService.getFilters(this.config);
  }

  openFilterModal(activeFilter?: string) {
    const modalRef = this.modalService.open(FiltersModalComponent);
    modalRef.componentInstance.filters = this.filters;
    modalRef.componentInstance.values = this.values;
    modalRef.componentInstance.activeFilter = activeFilter;

    modalRef.result.then(result => this.filter.emit(result), () => {});
  }

}
