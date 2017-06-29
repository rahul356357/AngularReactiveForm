import { AbstractControl } from "@angular/forms/src/forms";

export const matcher = (control: AbstractControl) => {
    const password = control.get('password');
    const cpassword= control.get('cpassword');
    if(!password || !cpassword){
        return null
    }
 return password.value===cpassword.value?null:{nomatch:true};
}