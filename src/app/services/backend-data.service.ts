import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendDataService {

  server_address:string = '/api';
  // server_address:string = 'http://localhost:3000';

  constructor(public http: HttpClient) { }
  getMural() {
    return this.http.get(`${this.server_address}/mural`)
  }
  getAbstract() {
    return this.http.get(`${this.server_address}/abstract`)
  }
  getWatercolor() {
    return this.http.get(`${this.server_address}/watercolor`)
  }
  getPastel() {
    return this.http.get(`${this.server_address}/pastel`)
  }
  getCharcoal() {
    return this.http.get(`${this.server_address}/charcoal`)
  }
  getAcrylic() {
    return this.http.get(`${this.server_address}/acrylic`)
  }
  addPainting(data: any){
    console.log(data);
    return this.http.post<any>(`${this.server_address}/addwork`,data)
  }
}
