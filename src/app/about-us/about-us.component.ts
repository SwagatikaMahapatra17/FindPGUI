import { Component } from '@angular/core';
import { HomenavComponent } from "../homenav/homenav.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [HomenavComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
