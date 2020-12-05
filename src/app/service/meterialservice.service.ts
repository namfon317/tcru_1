import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Materialinterface } from '../interface/materialinterface';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MeterialserviceService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:5000/api/material'; 
  showMaterial() {
    let httpParams = new HttpParams();
    
    const observable = this.http.get<any[]>('http://localhost:5000/api/material', {params: httpParams})
    return observable;
    // .pipe(
    //   map(material => {
    //     const newMaterial = [];
    //     for (let item of material) {
    //       const fon = item.material_name;
    //       newMaterial.push({ name: fon });
    //     }
    //     return newMaterial;
    //   }),
    //   tap(material => console.log(material))
    // );
  }

  addMaterial(body: Materialinterface){
    return this.http.post('http://localhost:5000/api/material', body)
  }
}