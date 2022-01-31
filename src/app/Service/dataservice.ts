import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const rootURL = 'https://www.prevision-meteo.ch/services/json/'
const CityListUrl = 'https://www.prevision-meteo.ch/services/json/list-cities'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  GetByCity(city:string){
    if(city=='' || city== null)
    {
      var Url=rootURL+'Limoges';
    }
    else
    {
      var Url=rootURL+city;
    }
    return this.http.get(Url)
  }

  GetListCity(){
    return this.http.get(CityListUrl)
  }
}
