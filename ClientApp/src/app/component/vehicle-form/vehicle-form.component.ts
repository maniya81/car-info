import { VehicleService } from './../../services/vehicle.service';
import { Component, OnInit } from '@angular/core';
import { FeatureService } from 'src/app/services/feature.service';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  makes: any[]; 
  models: any[];
  features: any[];
  vehicle: any = {};

  constructor(
    private vehicleservice:VehicleService,
    private featureService: FeatureService) { }

  ngOnInit(): void {
    this.vehicleservice.getMakes().subscribe( makes =>{
      this.makes = makes;
      console.log(this.makes);
      
    })
    this.vehicleservice.getFeatures().subscribe(features => 
      this.features = features);
  }
  onMakeChange() {
    console.log('change');
    var selectedMake = this.makes.find(m => m.id == this.vehicle.make);
    this.models = selectedMake ? selectedMake.models : [];

  }

}
