import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { EntertainmentnewsComponent } from './entertainmentnews/entertainmentnews.component';
import { HealthnewsComponent } from './healthnews/healthnews.component';
import { SciencenewsComponent } from './sciencenews/sciencenews.component';
import { SportsnewsComponent } from './sportsnews/sportsnews.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [
  {path:'',component:TopheadingComponent},
  {path:'tech',component:TechnewsComponent},
  {path:'business',component:BusinessnewsComponent},
  {path:'science',component:SciencenewsComponent},
  {path:'health',component:HealthnewsComponent},
  {path:'sports',component:SportsnewsComponent},
  {path:'entertainment',component:EntertainmentnewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
