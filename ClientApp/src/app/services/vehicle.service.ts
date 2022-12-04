import { catchError, first, tap } from 'rxjs/operators';
import { SaveVehicle, Vehicle } from './../models/vehicle';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
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
    return this.http.get<Vehicle>(`${environment.apiUrl}vehicles/${id}`);
  }
  getVehicles(filter): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${environment.apiUrl}vehicles?${this.toQueryString(filter)}`).pipe(
      tap(data => console.log('Vehicle', JSON.stringify(data)),
        catchError(this.handleError)
      )
    );
  }
  
  private handleError(err: any) {
    console.log(err);
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error Occured: ${err.error.message}`;
    }
    return throwError(errorMessage);

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
