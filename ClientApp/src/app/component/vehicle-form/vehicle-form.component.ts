import { VehicleService } from './../../services/vehicle.service';
import { Component, OnInit } from '@angular/core';
import { FeatureService } from 'src/app/services/feature.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SaveVehicle, Vehicle } from 'src/app/models/vehicle';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  makes: any[];
  models: any[];
  features: any[];
  vehicle: SaveVehicle = {
    id: 0,
    makeId: 0,
    modelId: 0,
    isRegistered: false,
    features: [],
    contact: {
      name: '',
      email: '',
      phone: '',
    }
  };

  constructor(
    private vehicleService: VehicleService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.route.params.subscribe(p => {
      this.vehicle.id = +p['id'];
    });
  }

  ngOnInit(): void {
    this.vehicleService.getMakes().subscribe(makes => {
      this.makes = makes;
      //console.log("makes", makes);

      this.vehicleService.getFeatures().subscribe(features => {
        this.features = features
        // console.log("features", features);
      });
      if (this.vehicle.id) {
        this.vehicleService.getVehicle(this.vehicle.id)
          .subscribe(vehicle => {
            //console.log("vehicle", vehicle);
            if (this.vehicle.id) {
              this.setVehicle(vehicle);
              this.populateModels();
            }
          }, err => {
            if (err.status == 404)
              this.router.navigate(['/home']);
          });
      }
    })
  }

  private setVehicle(v) {
    //console.log("setVehicle", v);

    this.vehicle.id = v.id;
    this.vehicle.makeId = v.make.id;
    this.vehicle.modelId = v.model.id;
    this.vehicle.isRegistered = v.isRegistered;
    this.vehicle.contact = v.contact;
    this.vehicle.features = v.features.map(f => f.id);
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
    //console.log('change');
    var selectedMake = this.makes.find(m => m.id == this.vehicle.makeId);
    this.models = selectedMake ? selectedMake.models : [];
    delete this.vehicle.modelId;
  }
  private populateModels() {
    var selectedMake = this.makes.find(m => m.id == this.vehicle.makeId);
    this.models = selectedMake ? selectedMake.models : [];
  }

  submit() {
    if (this.vehicle.id) {
      this.vehicleService.update(this.vehicle)
        .subscribe(x => {
          this.router.navigate(['/vehicles']);
          console.log(x);
        });
    }
    else {
      this.vehicleService.create(this.vehicle)
        .subscribe(x =>
          console.log(x)
          // manual error handling
          // err => {
          //   console.log("error occured");
          // }
        );
    }
  }
  delete() {
    if (confirm("Are you sure?")) {
      this.vehicleService.delete(this.vehicle.id)
        .subscribe(x => {
          this.router.navigate(['/home']);
        });
    }
  }
}
