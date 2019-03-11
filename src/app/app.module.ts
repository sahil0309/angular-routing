import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent, } from './app.component';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { ServersService } from './servers/servers.service';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
