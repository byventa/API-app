import { Injectable } from '@angular/core';

import { retry } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  private coords = new BehaviorSubject<any>({ lat: undefined, lng: undefined });
  currentCoords = this.coords.asObservable()


  constructor(private httpClient: HttpClient) { }

  queryLocations(q: any): Observable<any> {
    return this.httpClient.get<any>(`https://nominatim.openstreetmap.org/search?q=${q}&format=json`)
      .pipe(retry(1));
  }
  changeCoords(obj: any) {
    this.coords.next(obj);
  }
  queryImage(lon: any, lat: any): Observable<any> {
    return this.httpClient.get<any>(`https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&dim=0.15&api_key=R7VS1oc37gC3ALl6lhI4ojjIIQeKICLOnSAUKoZz`)
  }

}
