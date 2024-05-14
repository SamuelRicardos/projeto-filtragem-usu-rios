import { Component, Output, EventEmitter } from '@angular/core';
import { IFilterOption } from '../../interfaces/filters-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  filterOption: IFilterOption = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined,
  }
statusList = [
  { description: 'Ativo', value: true},
  { description: 'Inativo', value: false}
];

@Output('onFilter') onFilterEmitt = new EventEmitter<IFilterOption>();
onFilter() {
  this.onFilterEmitt.emit(this.filterOption);
}



}
