import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { SeniorDesignOneComponent } from './views/senior-design-one/senior-design-one.component';
import { SeniorDesignTwoComponent } from './views/senior-design-two/senior-design-two.component';
import { Sd2DocumentationComponent } from './components/sd2-documentation/sd2-documentation.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    SeniorDesignOneComponent,
    SeniorDesignTwoComponent,
    Sd2DocumentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
