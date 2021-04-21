import { KeyValuePair, Vehicle } from './../../models/vehicle';
import { VehicleService } from './../../services/vehicle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'vehicle-list.html'
})
export class VehicleListComponent implements OnInit {
  vehicles: any;
  allVehicles: any;
  makes: KeyValuePair[];
  filter: any = {};


  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.vehicleService.getMakes()
      .subscribe(makes => this.makes = makes);
    this.vehicleService.getVehicles()
      .subscribe(vehicle => {
        this.vehicles = this.allVehicles = vehicle;
        console.log(this.vehicles);
      });

  }
  onFilterChange() {
    var vehicles = this.allVehicles;

    if (this.filter.makeId)
      vehicles = vehicles.filter(v => v.make.id == this.filter.makeId);

    if (this.filter.modelId)
      vehicles = vehicles.filter(v => v.model.id == this.filter.modelId);

    this.vehicles = vehicles;
  }

  resetFilter() {
    this.filter = {};
    this.onFilterChange();
  }
}