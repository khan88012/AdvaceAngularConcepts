import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { ValidateSentence } from '../validators/sentence.validators';
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
    description : ['', [ValidateSentence, Validators.required]]
  });


  ngOnInit(): void {

  }
  onSubmit() {


    alert(this.recForm.value.description);
  }

}
