import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceService } from './services/service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 details:any=[];

  constructor(private apiService: ServiceService) {



  }
  ngOnInit() {
    this.apiService.getDetails().subscribe(res=>{
      this.details=res;
      console.log(this.details);
    })
  
}

  
  
}


