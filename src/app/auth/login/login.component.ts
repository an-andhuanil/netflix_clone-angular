import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthResponseData, AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService,private router : Router ) { }
  userForm = new FormGroup({
    userName : new FormControl (''),
    passWord :  new FormControl (''),
  });
  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.userForm.value.userName)
    console.log(this.userForm.value.passWord)
    let user : any = this.userForm.value.userName;
    let passWord : any = this.userForm.value.passWord;
    let authObs : Observable<AuthResponseData>;
    authObs =  this.authService.login(user,passWord);
    authObs.subscribe((res) => {
      this.router.navigate(['/home'])
    })
  }
}
