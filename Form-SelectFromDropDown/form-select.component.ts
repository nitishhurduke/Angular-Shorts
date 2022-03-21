import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})
export class FormSelectComponent implements OnInit {

  addProduct: FormGroup;
  defaultCategory: string = "Selected";
  categories: string[] = ['Household', 'Electronics', 'Grocery', 'Wearable'];
  selectedCategory: string;
  constructor(private fb: FormBuilder) {

    this.addProduct = this.fb.group({
      category: [this.selectedCategory]
    });


  }

  ngOnInit(): void {
  }

  addNewProduct() {
    let selected: string = this.addProduct.get('category').value;
    if (!selected.includes(this.defaultCategory)) {
      alert(this.addProduct.get('category').value);
    }
    console.log(this.addProduct.get('category').value);
  }
}
