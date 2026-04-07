import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { CNavbarComponent } from './cnavbar/cnavbar.component';
import { CpagesComponent } from './cpages/cpages.component';

const routes: Routes = [
  {
    path: "aboutus",
    children: [
      {
        path: "",
        component: CNavbarComponent,
      },
      {
        path: "our_employees",
        component: CpagesComponent,
      },
      {
        path: "our_company",
        component: LayoutComponent,
      },
    ],
  },
];;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }


