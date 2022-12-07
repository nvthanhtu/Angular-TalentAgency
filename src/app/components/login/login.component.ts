import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserLoginInfo } from 'src/app/model/user-login.model';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginValid: boolean = true;
  userLogin: UserLoginInfo = new UserLoginInfo();
  login:string='';
  password: string = '';
  //loginForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<LoginComponent>,private session: SessionService ) {
    // this.loginForm = new FormGroup({
    //   login: new FormControl(null),
    //   password: new FormControl(null),
    // })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  validateLogin() {
    this.userLogin.login = this.login;
    this.userLogin.password = this.password;
    // Set name of the session
    this.session.setLoginName(this.userLogin.login);
    // Send data to the parent component
    this.dialogRef.close(this.userLogin); 
    
  }
}
