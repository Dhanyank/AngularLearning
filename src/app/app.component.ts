import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



  public myData =[
    {Name: 'Jhon',Age:28},
    {Name: 'Sai',Age:34},
    {Name: 'Dany',Age:19},
    {Name: 'Samuel',Age:25},
    {Name: 'Susan',Age:22},

];
  ngOnInit(): void {

  }
  
}


