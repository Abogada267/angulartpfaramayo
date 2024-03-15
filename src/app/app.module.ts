import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AlumnosDetailComponent } from './alumnos-detail/alumnos-detail.component';
import { AlumnosSearchComponent } from './alumnos-search/alumnos-search.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InMemoryDataService } from './in-memory-data.service';
import { MessagesComponent } from './massages/massages.component';




@NgModule({
  
  declarations: [
   
    DashboardComponent,
       AlumnosComponent,
    AlumnosDetailComponent,
    MessagesComponent,
    AlumnosSearchComponent,  
    
  ],
   imports: [
  BrowserModule,
  CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  RouterOutlet,
  HttpClientInMemoryWebApiModule.forRoot(
       InMemoryDataService, { dataEncapsulation: false }
     )
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }