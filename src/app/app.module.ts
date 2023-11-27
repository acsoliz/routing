import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';

//Home
//Contact
//Above

const routes : Routes = [
  {
    path:'home',
    component : HomeComponent
  },
  {
    path:'courses',
    component : CoursesComponent

  },
  {
    path:'courses/:course',
    component : CoursesDetailComponent

  },
  {
    path:'contact',
    component : ContactComponent

  },
  {
    path:'about', 
    component : AboutComponent

  },
  {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full'
    
  },
  {
    path:'**',
    component : PageNotFoundComponent

  }

];




@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    PageNotFoundComponent,
    CoursesComponent,
    CoursesDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // especificar el sistema de rutas principal
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
