import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  filters: Array<string> = [
    'period'
  ];
  values: any = {};

  handleFilter(values: any) {
    this.values = values;
  }

}
