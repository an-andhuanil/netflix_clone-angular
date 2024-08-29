import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthResponseData, AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm!: FormGroup;
  submitted = false;
  isLoginMode = false;
  title : string = '';
  error : string = '';
  constructor(private authService : AuthService,private router : Router,private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.title = 'In';
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }


  get f() { return this.userForm.controls; }


  onSubmit(){
    if(this.userForm.valid){
      this.submitted = true;
      let user : any = this.userForm.value.email;
      let passWord : any = this.userForm.value.password;
      let authObs : Observable<AuthResponseData>;
      if(this.isLoginMode == false){
        authObs =  this.authService.login(user,passWord);
      }else{
        authObs = this.authService.signUp(user,passWord);
      }
      authObs.subscribe((res) => {
        this.router.navigate(['/home'])
      },(error) => {
        this.error = error;
      })
    }
  }

  onSignUp(){
    this.title = this.isLoginMode == true ? 'In' : 'Up';
    this.isLoginMode =  !this.isLoginMode;
    console.log(this.isLoginMode)
  }
}
