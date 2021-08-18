import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DublinbikeService {

  constructor(private http: HttpClient) { }

  getStations() : Observable<any[]>{

    const contract_name = 'dublin';
    const api_key = '?';
    const endPointUrl = `https://api.jcdecaux.com/vls/v1/stations?contract=${contract_name}&apiKey=${api_key}`;

    return this.http.get<any[]>(endPointUrl);
  }
}
