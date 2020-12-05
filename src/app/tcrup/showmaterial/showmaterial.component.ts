import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MeterialserviceService } from 'src/app/service/meterialservice.service';

@Component({
  selector: 'app-showmaterial',
  templateUrl: './showmaterial.component.html',
  styleUrls: ['./showmaterial.component.css']
})
export class ShowmaterialComponent implements OnInit {

  

  addForm: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient, private matService: MeterialserviceService) { }
  ngOnInit(): void {
    this.createForm();
  }

  onClickRegis() {

    const material = this.addForm.getRawValue();
    this.matService.addMaterial(material).subscribe();
    

  }

  createForm(){
    this.addForm = this.fb.group({
      metarial_id:['',[Validators.required]],
      quantity:['',[Validators.required]],
      material_name:['',[Validators.required]],
      weight:['',[Validators.required]],
      remain:['',[Validators.required]],
      production_id:['',[Validators.required]],
      capacity_id: [,[Validators.required]]
    })
  }

  get metarial_id(){
    return this.addForm.get('metarial_id')
  }
  get quantity(){
    return this.addForm.get('quantity')
  }
  get material_name(){
    return this.addForm.get('material_name')
  }
  get weight(){
    return this.addForm.get('weight')
  }
  get remain(){
    return this.addForm.get('remain')
  }
  get production_id(){
    return this.addForm.get('production_id')
  } 
  get capacity_id(){
    return this.addForm.get('capacity_id')
  }




}
