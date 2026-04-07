import { Routes } from '@angular/router';
import path from 'path';
import { LayoutComponent } from './dashboard/layout/layout.component';
import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { CpagesComponent } from './dashboard/cpages/cpages.component';
import { CNavbarComponent } from './dashboard/cnavbar/cnavbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [    
    {
        path: '', component: HomeComponent, title: 'FIND PG'
    },
    {
        path: 'home', component: HomeComponent,
    },
    {
        path: 'about-us', component: AboutUsComponent,
    },
    {
        path: 'login', component: LoginComponent,
    },
    {
        path: 'signUp', component: SignupComponent,
    },
    {
        path: 'dashboard', children: [{
            path: "", component: DashboardComponent,
        },
        {
            path: 'cnavbar',
            component: CNavbarComponent,
        },
        ]
    },
    {
        path: 'layout', component: LayoutComponent,
    }
];
