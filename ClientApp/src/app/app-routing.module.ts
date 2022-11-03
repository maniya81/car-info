import { HomeComponent } from './component/home/home.component';
import { VehicleFormComponent } from './component/vehicle-form/vehicle-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleListComponent } from './component/vehicle-list/vehicle-list';
import { ViewVehicleComponent } from './component/view-vehicle/view-vehicle';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "vehicles/new", component: VehicleFormComponent },
  { path: 'vehicles/edit/:id', component: VehicleFormComponent },
  { path: 'vehicles/:id', component: ViewVehicleComponent },
  { path: 'home', component: HomeComponent },
  { path: 'vehicles', component: VehicleListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
