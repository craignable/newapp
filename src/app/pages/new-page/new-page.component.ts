import { NgModule, Component, ViewChild } from '@angular/core';
import { Customer, Service } from 'src/app/shared/services/app.service';
import repaintFloatingActionButton from 'devextreme/ui/speed_dial_action/repaint_floating_action_button';
import { DxDataGridModule, DxDataGridComponent, DxSpeedDialActionModule, DxSelectBoxModule, } from 'devextreme-angular';

@Component({
  templateUrl: 'new-page.component.html',
  providers: [Service],
})

export class NewPageComponent {

  @ViewChild(DxDataGridComponent, { static: false }) grid: DxDataGridComponent;
  customers: Customer[];
  selectedRowIndex = -1;

  constructor(service: Service) {
    this.customers = service.getCustomers();
  }

  editRow() {
    this.grid.instance.editRow(this.selectedRowIndex);
    this.grid.instance.deselectAll();
  }

  deleteRow() {
    this.grid.instance.deleteRow(this.selectedRowIndex);
    this.grid.instance.deselectAll();
  }

  addRow() {
    this.grid.instance.addRow();
    this.grid.instance.deselectAll();
  } 
}