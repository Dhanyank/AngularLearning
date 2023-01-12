import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  saveForm: any;
  constructor(private fb: FormBuilder, private service: ServiceService) { }
  ngOnInit(): void {


    this.saveForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      gender: ['male', [Validators.required]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],

      age: ['', [Validators.required, Validators.pattern('[0-9]*')]],

      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],

      address: this.fb.group({
        street: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
        city: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
        state: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],

        pin: ['', [Validators.required, Validators.minLength(6)]],
      }),
    });


  }

  register() {
    console.log(this.saveForm.value);

    this.service.register(this.saveForm.value)
      .subscribe(res => console.log('sucess', res),



        error => console.log('Error', error)

      );


  }


}

