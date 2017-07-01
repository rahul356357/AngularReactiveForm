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
    // initialize a form using formbuilder and set the different controls
    this.registerForm =  this.formbuilder.group({
      'name': new FormControl('rahul', [Validators.required]),
      'email' : new FormControl('rahulbora2068@gmail.com', [Validators.required, Validators.email]),
      // later change to default type
      'gender': new FormControl('male'),
      //  later implement a method that shows the current date to the user
      'dob':new FormControl(null,Validators.required) ,
      'password':new FormControl('123',Validators.required),
      'cpassword': new FormControl('123', Validators.required)
    },{validator:matcher});
  }
  onSubmit(){
   this.auth.register(this.registerForm.value).subscribe(res=>{
     if(res["success"]){
      console.log(res["message"])
     }
     else{
        console.log(res)
     }
   })
  }
}
