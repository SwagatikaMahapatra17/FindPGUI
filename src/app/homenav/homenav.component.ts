import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-homenav',
  standalone: true,
  imports: [RouterOutlet,RouterModule,RouterLink],
  templateUrl: './homenav.component.html',
  styleUrl: './homenav.component.css'
})
export class HomenavComponent {
  
}
