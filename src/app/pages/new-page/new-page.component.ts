import { Component, ViewChild } from '@angular/core';
import { Customer, Service } from 'src/app/shared/services/app.service';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  templateUrl: 'new-page.component.html',
  providers: [Service],
})

export class NewPageComponent {

  @ViewChild(DxDataGridComponent, { static: false }) grid: DxDataGridComponent;
  customers: Customer[];
  directions: any;
  selectedRowIndex = -1;
  popupVisible: boolean = false;
  canShow: boolean = false;

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
  
  selectedChanged(e) {
    this.selectedRowIndex = e.component.getRowIndexByKey(e.selectedRowKeys[0]);
  }

  click = (e: any) => {
    (this.popupVisible = true), console.log("works");
  };

  popup_hiding(e: any) {
    this.canShow = false;
  }

  popup_shown(e: any) {
    this.canShow = true;
  }
}