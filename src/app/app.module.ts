import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { IntroductionComponent } from './components/sections/introduction/introduction.component';
import { AboutComponent } from './components/sections/about/about.component';
import { ExperienceComponent } from './components/sections/experience/experience.component';
import { HttpClientModule } from '@angular/common/http';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    IntroductionComponent,
    AboutComponent,
    ExperienceComponent,
    BaseLayoutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
