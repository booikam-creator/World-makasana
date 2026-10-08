import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiLoc = 'https://maps.googleapis.com/maps/api/place/textsearch/'
  constructor(private http: HttpClient) { }

  getCityName(lat: number, lon: number): Observable<any> {
    const apiKey = 'pk.3c5eac87dd6fd7bf87f7197d983a62db';

    // const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`;
    const url = `https://us1.locationiq.com/v1/reverse.php?key=${apiKey}&lat=${lat}&lon=${lon}&format=json`;
    return this.http.get<any>(url);
  }
  isgetAllCity() {

    const apiKey = 'AIzaSyB6fF2enCVbR6_AzIVhD4WH6cUYrhkewHU';

    return this.http.get<any>(`${this.apiLoc}json?query=cities+in+South+Africa&key=${apiKey}`)
  }

}
