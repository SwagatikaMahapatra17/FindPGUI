
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppserviceService } from '../appservice.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ForgotPasswordDialogComponentComponent } from './forgot-password-dialog-component/forgot-password-dialog-component.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HomenavComponent } from "../homenav/homenav.component";

// export interface Dialogdata {
//   animal: string;
//   name: string;
// }

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, MatDialogModule, HomenavComponent,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [AppserviceService]
})
export class LoginComponent {

  loginObj: Login;
  constructor(public dialog: MatDialog, private http: HttpClient, private _appService: AppserviceService, private _router: Router) {
    // constructor(private appService: AppserviceService) {
    this.loginObj = new Login();
  }

  onLogin(email: string, password: string): void {
    this.loginObj.UserName = email;
    this.loginObj.Password = password;
    // debugger;
    this._appService.GetLogin(this.loginObj).subscribe({
      next: (res: any) => {

        const token = res.result.accessToken;
        localStorage.setItem('tokendetails', token);
        this._router.navigate(['/dashboard']);
        //  if (token!='User not Exists') {
        //    localStorage.setItem('token', token);
        //    //this.router.navigate(['/loginSuccess']);
        //    this.router.navigateByUrl('/loginSuccess');
        //  } else {
        //    alert('Login failed: No token received.');
        //  }
        //   this._router.navigate(['/applyattendance']);
      },
      error: (err: any) => {
        alert('Invalid Credentials');
      }
    });
  }
  // onLogin() {
  //   debugger;
  //    this.http.post('https://localhost:44341/api/V1/User/Login',this.loginObj).subscribe((res:any)=>  {     
  //    if (res.result) {
  //       alert('Login Success');
  //       } else {
  //       alert('Invalid username or password');
  //       }
  //    })
  // }
  openDialogFP(): void {
    this.dialog.open(ForgotPasswordDialogComponentComponent), {}
  }
}

export class Login {
  UserName: string;
  Password: string;
  constructor() {
    this.UserName = '';
    this.Password = '';
  }
}
// openDialogFP(): void {
//   this.dialog.open(ForgotPasswordDialogComponentComponent, {
//     width: '400px'
//   });
// }




