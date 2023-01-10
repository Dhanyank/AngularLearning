import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Details } from '../details';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http: HttpClient) { 
    
  }

  getDetails(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}
