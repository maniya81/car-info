import { VehicleListComponent } from './component/vehicle-list/vehicle-list';
import { HomeComponent } from './component/home/home.component';
import { FeatureService } from './services/feature.service';
import { VehicleService } from './services/vehicle.service';
import { MenuComponent } from './component/menu/menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleFormComponent } from './component/vehicle-form/vehicle-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppErrorHandler } from './app.error-handler';
import { PaginationComponent } from './component/shared/pagination.component';
import { ViewVehicleComponent } from './component/view-vehicle/view-vehicle';
import { PhotoService } from './services/photo.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    VehicleFormComponent,
    HomeComponent,
    VehicleListComponent,
    PaginationComponent,
    ViewVehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler },
    VehicleService,
    PhotoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
