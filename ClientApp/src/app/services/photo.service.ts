import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class PhotoService {

  constructor(private http: HttpClient) { }

  upload(vehicleId, photo) {
    var formData = new FormData();
    formData.append('file', photo);
    return this.http.post(`${environment.apiUrl}vehicles/${vehicleId}/photos`, formData)
  }
  getPhotos(vehicleId) {
    return this.http.get(`${environment.apiUrl}vehicles/${vehicleId}/photos`)
  }
}