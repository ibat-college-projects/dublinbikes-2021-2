import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DublinbikeComponent } from './components/dublinbike/dublinbike.component';
import { StationDetailComponent } from './components/station-detail/station-detail.component';
import {FormsModule} from '@angular/forms';
import { FilterstationsPipe } from './pipes/filterstations.pipe'

@NgModule({
  declarations: [
    AppComponent,
    DublinbikeComponent,
    StationDetailComponent,
    FilterstationsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
