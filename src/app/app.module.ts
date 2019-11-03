import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MonitorComponent } from './monitor/monitor.component';
import { MultiWindowModule } from 'ngx-multi-window';
import { SafePipe } from 'src/provider/pipe/safe.pipe';
import { ColorPickerModule } from 'ngx-color-picker';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    MonitorComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MultiWindowModule,
    ColorPickerModule
  ],
  providers: [SafePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
