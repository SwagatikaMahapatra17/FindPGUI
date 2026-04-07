import { Component } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: [AppserviceService]
})
export class DashboardComponent {
  dashboardobj: DashboardEntity[] = [];
  constructor(private _appService: AppserviceService) {

  }
  ngOnInit(): void {
    this.GetAllCity();
  }
  GetAllCity() {
    this._appService.GetAllCity().subscribe({
      next: (res: any) => {
        this.dashboardobj = res;
      },
      error: (err: any) => {
        console.error('Server error:', err);
      }

    });
  }

}
export class DashboardEntity {
  stateId: number;
  cityName: string;
  id: number;
  constructor() {
    this.stateId = 1;
    this.cityName = '';
    this.id = 0;
  }
}