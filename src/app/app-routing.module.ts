import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProgressComponent } from './progress/progress.component';
import { Section1Component } from './section1/section1.component';



const routes: Routes = [{path:'',component:HomeComponent},{path:'interest',component:Section1Component},{path:'skills',component:ProgressComponent},{path:'about',component:AboutComponent},{path:'contact',component:ContactComponent},
{path:'**',component:PagenotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
