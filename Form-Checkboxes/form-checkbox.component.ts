import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.css']
})
export class FormCheckboxComponent implements OnInit {

  addProduct:FormGroup
  pay_modes:any[]= [
    {id:"Cash", mode:"Cash"},
    {id:"Credit Card", mode:"Credit Card"},
    {id:"Debit Card", mode:"Debit Card"}
  ]

  constructor(private formBuilder : FormBuilder) {
    this.addProduct = this.formBuilder.group({
      paymentModes :this.formBuilder.array([]),
    })
   }

  ngOnInit(): void {
  }

  onCheckboxChange(e){
    const paymentModes = this.addProduct.get('paymentModes') as FormArray
    
    if(e.target.checked){
      paymentModes.push(new FormControl(e.target.value))
    }else{
      const index = paymentModes.controls.findIndex(x => x.value === e.target.value);
      paymentModes.removeAt(index);
    }
  
  }
  submit(){
    console.log(this.addProduct.value)
  }
}
