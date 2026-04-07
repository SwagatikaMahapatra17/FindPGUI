import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HomenavComponent } from "../homenav/homenav.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomenavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  constructor(private router: Router) { }
  btnLogin() {
    this.router.navigate(['/login']);
  }
  btnSignUP() {
    console.log('Sign Up button clicked');
    this.router.navigate(['/signUp']);
  }
  onlink() {
    console.log('Sign Up button clicked');
    this.router.navigate(['/signUp']);
  }
}
