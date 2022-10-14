import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form!: FormGroup;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['',[Validators.required]],
      unitPrice: [''],
      unitsInStock: ['']

    });
  }

  onSubmit() : void {
    
  }

  onClickClean():void {
    const nameCtrl = this.form.get('name');
    if(nameCtrl){
      nameCtrl.setValue('');
    }
  }
}
