import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './dashboard/layout/layout.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [CommonModule,LayoutComponent,HttpClientModule,],
  exports:[LayoutComponent]
})
export class AppModule { }
