import { BehaviorSubject } from 'rxjs';
import { KeyValuePair, Vehicle } from './../../models/vehicle';
import { VehicleService } from './../../services/vehicle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'vehicle-list.html',
})
export class VehicleListComponent implements OnInit {
  private readonly PAGE_SIZE = 5;
  queryResult: any = {};
  allVehicles: any;
  vehiclesLength: number;
  makes: KeyValuePair[];
  query: any = {
    makeId: '',
    pageSize: this.PAGE_SIZE,
  };
  columns = [
    { title: 'Id' },
    { title: 'Contact Name', key: 'contactName', isSortable: true },
    { title: 'Make', key: 'make', isSortable: true },
    { title: 'Model', key: 'model', isSortable: true },
    { title: 'Action', key: 'Action', isSortable: false },
  ];

  loading$ = new BehaviorSubject<boolean>(true);
  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {
    this.vehicleService
      .getMakes()
      .pipe()
      .subscribe(makes => {
        this.makes = makes;
        this.loading$.next(false);
      });
    this.populateVehicles();
  }
  private populateVehicles() {
    this.vehicleService
      .getVehicles(this.query)
      .subscribe(result => (this.queryResult = result));
  }
  onFilterChange() {
    this.query.page = 1;
    this.populateVehicles();
  }

  resetFilter() {
    this.query = {
      makeId: '', // Resetting the makeId to empty string
      page: '', // You might also want to reset other properties as needed
      pageSize: this.PAGE_SIZE,
    };
    this.populateVehicles();
  }

  sortBy(columnName) {
    if (this.query.sortBy === columnName) {
      this.query.isSortAscending = !this.query.isSortAscending;
    } else {
      this.query.sortBy = columnName;
      this.query.isSortAscending = true;
    }
    this.populateVehicles();
  }
  onPageChange(page) {
    this.query.page = page;
    this.populateVehicles();
  }
}
