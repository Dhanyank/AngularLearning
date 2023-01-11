import { Component, OnInit } from '@angular/core';
import { stringToKeyValue } from '@angular/flex-layout/extended/style/style-transforms';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Data } from '../details';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
saveForm:any;
  constructor(private fb: FormBuilder,private service: ServiceService) { }

  ngOnInit(): void {




    this.saveForm = new FormGroup({
      name: new FormControl(''),
      age: new FormControl(''),
      gender:new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
       address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        pin: new FormControl('')
      })
    });

  }

  register()
  {
    console.log(this.saveForm.value);
    this.service.register(this.saveForm.value)
    .subscribe(res=>console.log('sucess',res),
    error=>console.log('Error',error)
    
    );

    
  }

  

}
