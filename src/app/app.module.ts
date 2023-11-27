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
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

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
    component : ContactComponent,
    children: [
      {
        path: '',
        component : ContactInfoComponent,
      },
      {
        path: 'details',
        component : ContactDetailsComponent,
      }
    ]

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
    CoursesDetailComponent,
    ContactInfoComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // especificar el sistema de rutas principal
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
