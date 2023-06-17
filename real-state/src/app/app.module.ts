import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutPageModule } from './about-page/about-page.module';
import { HomeModule } from './share/home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    RouterModule,
    BrowserAnimationsModule,
    AboutPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
