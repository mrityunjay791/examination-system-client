import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoServiceService } from './service/demo-service.service';
import { RouterModule,Router } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { APP_ROUTING_MODULE } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpModule,
    HomeModule,
    APP_ROUTING_MODULE
  ],
  providers: [DemoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
