import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { SeniorDesignOneComponent } from './views/senior-design-one/senior-design-one.component';
import { SeniorDesignTwoComponent } from './views/senior-design-two/senior-design-two.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'sd1-documentation', component: SeniorDesignOneComponent},
  {path: 'sd2-documentation', component: SeniorDesignTwoComponent},
  {path: '**', component: HomeComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
