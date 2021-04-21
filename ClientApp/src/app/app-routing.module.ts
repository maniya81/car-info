import { VehicleFormComponent } from './component/vehicle-form/vehicle-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "vehicle/new", component: VehicleFormComponent },
  { path: 'vehicle/:id', component: VehicleFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
