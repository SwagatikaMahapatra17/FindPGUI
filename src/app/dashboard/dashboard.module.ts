import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CNavbarComponent } from './cnavbar/cnavbar.component';
import { CpagesComponent } from './cpages/cpages.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CNavbarComponent,
    CpagesComponent,
    LayoutComponent
  ]
})
export class DashboardModule { }
