import { HomeComponent } from './component/home/home.component';
import { VehicleFormComponent } from './component/vehicle-form/vehicle-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleListComponent } from './component/vehicle-list/vehicle-list';

const routes: Routes = [
  { path: '', redirectTo: 'vehicles', pathMatch: 'full' },
  { path: "vehicles/new", component: VehicleFormComponent },
  { path: 'vehicles/:id', component: VehicleFormComponent },
  { path: 'home', component: HomeComponent },
  { path: 'vehicles', component: VehicleListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
