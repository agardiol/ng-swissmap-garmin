import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgxMapLibreGLModule } from '@maplibre/ngx-maplibre-gl';
import { MapComponent } from './components/map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToolbarComponent } from './components/toolbar/toolbar.component'; 

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxMapLibreGLModule,
    BrowserAnimationsModule,

    MatIconModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
