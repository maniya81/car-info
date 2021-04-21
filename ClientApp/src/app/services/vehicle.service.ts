import { SaveVehicle } from './../models/vehicle';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  getFeatures(): Observable<any> {
    return this.http.get(`${environment.apiUrl}Features`);
  }

  getMakes(): Observable<any> {
    return this.http.get(`${environment.apiUrl}makes`);
  }
  create(vehicle) {
    return this.http.post(`${environment.apiUrl}vehicles`, vehicle);
  }
  update(vehicle: SaveVehicle) {
    return this.http.put(`${environment.apiUrl}vehicles/${vehicle.id}`, vehicle);
  }
  getVehicles() {
    return this.http.get(`${environment.apiUrl}vehicles`);
  }

  delete(id) {
    return this.http.delete(`${environment.apiUrl}vehicles/${id}`)
  }
  getVehicle(id) {
    return this.http.get(`${environment.apiUrl}vehicles/${id}`)
  }
}
