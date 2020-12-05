import { HttpClient } from '@angular/common/http';
import { Materialinterface } from './../../interface/materialinterface';
import { MeterialserviceService } from './../../service/meterialservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addm',
  templateUrl: './addm.component.html',
  styleUrls: ['./addm.component.css']
})
export class AddmComponent  {

  materialList: any[] = [];
  constructor(private http: HttpClient) {
    http.get<any[]>('http://localhost:5000/api/material').subscribe(result => {
      this.materialList = result;
    });
  }

  // OnInit(){
  //   this.queryMaterial();
  // }

  // materialList: Materialinterface[] = [];
  // // tslint:disable-next-line: typedef
  // queryMaterial(){
  //   this.matService.showMaterial().subscribe(
  //     response => {
  //       this.materialList = response;
  //     }
  //   );
  // }
}
