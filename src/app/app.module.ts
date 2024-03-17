import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import es from '@angular/common/locales/es';
import esAR from '@angular/common/locales/es-AR';
import { ApplicationRef, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AlumnosDetailComponent } from './alumnos-detail/alumnos-detail.component';
import { AlumnosSearchComponent } from './alumnos-search/alumnos-search.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MY_USER_TOKEN } from './core/injection-tokens';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InMemoryDataService } from './in-memory-data.service';
import { LoginComponent } from './layout/auth/auth/pages/login/login.component';
import { MessagesComponent } from './massages/massages.component';

registerLocaleData(es);
registerLocaleData(esAR);

@NgModule({
  declarations: [
    DashboardComponent,
    AlumnosComponent,
    AlumnosDetailComponent,
    AlumnosSearchComponent,
    MessagesComponent,
    LoginComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-AR',
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'outline',
      },
    },
    {
      provide: MY_USER_TOKEN,
      useValue: 'ldsjdm348342kjewkjksfdmsakjdsad',
    },
    {
      provide: 'API_URL',
      useValue: 'http://localhost:5000/',
    },
  ],
  bootstrap: [],
})
export class AppModule {
  constructor(private appRef: ApplicationRef) { }
  

  ngDoBootstrap() {
    this.appRef.bootstrap(AppComponent);
  }
}

// Bootstrap de la aplicación
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
