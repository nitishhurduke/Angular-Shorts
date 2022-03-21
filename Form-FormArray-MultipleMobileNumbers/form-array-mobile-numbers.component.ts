import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array-mobile-numbers',
  templateUrl: './form-array-mobile-numbers.component.html',
  styleUrls: ['./form-array-mobile-numbers.component.css']
})
export class FormArrayMobileNumbersComponent implements OnInit {

  addPerson: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.addPerson = this.formBuilder.group({
      name: '',
      mobiles: this.formBuilder.array([ //Add a FormGroup Initially
        this.formBuilder.group({
          mobile: ''
        })
      ])
    })
  }
  ngOnInit(): void {
  }

  //Get Form Array from Parent Form Group
  get mobiles(): FormArray {
    return this.addPerson.get("mobiles") as FormArray
  }

  //Form Group to be added in FormArray
  newMobileNo(): FormGroup {
    return this.formBuilder.group({
      mobile: ''
    })
  }

  //Add From group in Array when Button Clicked
  addNewMobileNo() {
    if (this.mobiles.length < 2) {
      this.mobiles.push(this.newMobileNo());
    }
  }

  //Remove a Form Group From Array
  removeMobile(i: number) {
    if (i > 0) {
      this.mobiles.removeAt(i);
    }
  }



  submit() {
    console.log(this.addPerson.value)
  }
}
