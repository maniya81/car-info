import { SaveVehicle, Vehicle } from './../models/vehicle';
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
  // getVehicles() {
  //   return this.http.get(`${environment.apiUrl}vehicles`);
  // }

  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}vehicles/${id}`)
  }
  getVehicle(id: number): Observable<Vehicle> {
    return this.http.get(`${environment.apiUrl}vehicles/${id}`).pipe((res) => {
      return <Observable<Vehicle>>(res);
    });
  }
  getVehicles(filter): Observable<any> {
    return this.http.get(`${environment.apiUrl}vehicles?${this.toQueryString(filter)}`);

  }

  toQueryString(obj) {
    var parts = [];
    for (var property in obj) {
      var value = obj[property];
      if (value != null && value != undefined)
        parts.push(encodeURIComponent(property) + '=' + encodeURIComponent(value));
    }

    return parts.join('&');
  }
}
