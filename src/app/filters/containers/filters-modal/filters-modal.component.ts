import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { NgbActiveModal, NgbTabset } from '@ng-bootstrap/ng-bootstrap';

import { FilterManifest } from './../../models/filter-manifest';

@Component({
  selector: 'app-filters-modal',
  templateUrl: './filters-modal.component.html'
})
export class FiltersModalComponent implements OnInit, AfterViewInit {
  @ViewChild('tabset') tabset: NgbTabset;

  @Input() filters: FilterManifest[];
  @Input() values: any;
  @Input() activeFilter: string;

  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (this.activeFilter) {
      this.tabset.select(this.activeFilter);
    }
  }

  closeModal() {
    this.activeModal.close(this.values);
  }

  handleReset() {
    this.activeModal.close({});
  }

  handleSubmit(values: any) {
    this.values = values;
    this.activeModal.close(values);
  }

}
