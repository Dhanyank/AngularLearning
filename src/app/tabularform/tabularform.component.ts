import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceService } from '../services/service.service'

@Component({
  selector: 'app-tabularform',
  templateUrl: './tabularform.component.html',
  styleUrls: ['./tabularform.component.css']
})
export class TabularformComponent implements OnInit {
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
