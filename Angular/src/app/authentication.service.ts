import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Server} from './config/www.service';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class AuthenticationService {
  constructor(private http:Http, private db:Server) {}
// method to register a user 
   register(body):Observable<Response>
  {
    console.log('====================================');
    console.log(body);
    console.log('====================================');
  return this.http.post(this.db.url+'users',body).map((res)=>{
    return res.json()
  })._catch((error)=>{
    console.log(error)
   return Observable.throw(error.json().error||"Server Error") 
  })
  }
 
}
