import { Routes, RouterModule } from '@angular/router';
 import {RegisterComponent} from './register/register.component'; 
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
const Approute :Routes =[
    {path:'', component:AppComponent},
    {path:'login', component:LoginComponent},
 {path:'register', component:RegisterComponent},
]















export const AppRouter = RouterModule.forRoot(Approute);

