import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { AppserviceService } from '../appservice.service';
import { HomenavComponent } from "../homenav/homenav.component";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatDialogModule, HttpClientModule, HomenavComponent,RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupObj: SignUp = new SignUp();

  constructor(
    public dialog: MatDialog,
    private http: HttpClient,
    private _appService: AppserviceService,
    private _router: Router
  ) { }

  onSignUp(firstname: string, lastname: string, phonenumber: string, email: string, password: string, role: string): void {
    debugger
    this.signupObj.FirstName = firstname;
    this.signupObj.LastName = lastname;
    this.signupObj.PhoneNumber = phonenumber;
    this.signupObj.Email = email;
    this.signupObj.Password = password;
    this.signupObj.Role = role;
    
    
      this._appService.GetSignUp(this.signupObj).subscribe({
    next: (res: any) => {
      alert('User added successfully!');
      this._router.navigate(['/login']); 
      console.log('Signup object:', this.signupObj);
    },
    error: (err: any) => {
      console.error('Signup error:', err);
      alert('Signup failed. Please check your inputs or try again later.');
    }
  });
  }}
 
export class SignUp {
  FirstName: string = '';
  LastName: string = '';
  PhoneNumber: string = '';
  Email: string = '';
  Password: string = '';
  Role: string = '';
}
