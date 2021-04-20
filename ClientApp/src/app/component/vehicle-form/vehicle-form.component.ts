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
  vehicle: any = {
    features: [],
    contact: {}
  };

  constructor(
    private vehicleService: VehicleService,
    private featureService: FeatureService) { }

  ngOnInit(): void {
    this.vehicleService.getMakes().subscribe(makes => {
      this.makes = makes;
      console.log(this.makes);

    })
    this.vehicleService.getFeatures().subscribe(features =>
      this.features = features);
  }
  onFeatureToggle(featureId, $event) {
    if ($event.target.checked)
      this.vehicle.features.push(featureId);
    else {
      var index = this.vehicle.features.indexOf(featureId);
      this.vehicle.features.splice(index, 1);
    }
  }
  onMakeChange() {
    console.log('change');
    var selectedMake = this.makes.find(m => m.id == this.vehicle.makeId);
    this.models = selectedMake ? selectedMake.models : [];
    delete this.vehicle.modelId;
  }
  submit() {
    this.vehicleService.create(this.vehicle)
      .subscribe(x => console.log(x));
  }

}
