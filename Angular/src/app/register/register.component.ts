import { Component, OnInit } from '@angular/core';
import {FormControl ,FormGroup , Validators ,FormBuilder} from '@angular/forms';
import {matcher} from './matcher';
import {AuthenticationService} from '../authentication.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm; 
  public genders:Array<String>=['male','female'];
  constructor( private formbuilder:FormBuilder, private auth:AuthenticationService) { }
  ngOnInit() {
    this.registerForm =  this.formbuilder.group({
      'name': new FormControl(null, [Validators.required]),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      // later change to default type
      'gender': new FormControl('male'),
      //  later implement a method that shows the current date to the user
      'dob':new FormControl(null,Validators.required) ,
      'password':new FormControl(null,Validators.required),
      'cpassword': new FormControl(null, Validators.required)
    },{validator:matcher});
  }
  onSubmit(){
   this.auth.register(this.registerForm.value).subscribe(res=>{
     console.log(res);
   })
  }
}
