import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dublinbike } from '../models/dublinbike';

@Injectable({
  providedIn: 'root'
})
export class DublinbikeService {

  constructor(private http: HttpClient) { }

  getStations() : Observable<Dublinbike[]>{

    const contract_name = 'dublin';
    const api_key = environment.api_key;
    const endPointUrl = `https://api.jcdecaux.com/vls/v1/stations?contract=${contract_name}&apiKey=${api_key}`;

    return this.http.get<Dublinbike[]>(endPointUrl);
  }

  getStation(stationId: number) : Observable<Dublinbike>{

    const contract_name = 'dublin';
    const api_key = environment.api_key;
    const endPointUrl = `https://api.jcdecaux.com/vls/v1/stations/${stationId}/?contract=${contract_name}&apiKey=${api_key}`;

    return this.http.get<Dublinbike>(endPointUrl);
  }
}
