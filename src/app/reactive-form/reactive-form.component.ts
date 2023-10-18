import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { ValidateSentence } from '../validators/sentence.validators';
import { forbiddenNameValidator } from '../validators/forbidden-name.directive';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  // recForm = new FormGroup({
  //   description : new FormControl('')

  // });
  constructor( private fb: FormBuilder) { }

  recForm = this.fb.group({
    description : ['', [ValidateSentence, Validators.required]],
    name : ['', [Validators.required], forbiddenNameValidator(/bob/i)]
  });
//The forbiddenNameValidator function you provided forbiddenNameValidator(/bob/i)
// is used to create a custom validator that checks whether the input value contains 
//the name "bob" in a case-insensitive manner. In this case, /bob/i is a regular expression literal
// that matches the string "bob" regardless of its letter casing.

  ngOnInit(): void {

  }
  onSubmit() {


    alert(this.recForm.value.description);
  }

}
