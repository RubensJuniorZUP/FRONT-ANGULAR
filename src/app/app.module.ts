import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  NbThemeModule, 
  NbLayoutModule, 
  NbSidebarModule, 
  NbButtonModule,
  NbMenuService,
  NbSidebarService,
  NbUserModule,
  NbContextMenuModule,
  //NbCardModule,
  NbMenuModule,
  
  
  
} 
  from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HomeModule } from './shared/home/home.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule,
    NbButtonModule,
    NbUserModule,
    NbContextMenuModule,
    //NbCardModule,
    NbMenuModule.forRoot(),
    HomeModule,
    //ServiceWorkerModule.register('ngsw-worker.js', {
      //enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      //registrationStrategy: 'registerWhenStable:30000'
    //})
    
  ],
  exports:[],
  providers: [
    NbMenuService,
    NbSidebarService
  ],
  bootstrap: [AppComponent],
  //: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
