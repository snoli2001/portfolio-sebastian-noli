import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { IntroductionComponent } from './components/sections/introduction/introduction.component';
import { AboutComponent } from './components/sections/about/about.component';
import { ExperienceComponent } from './components/sections/experience/experience.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { SkillsComponent } from './components/sections/skills/skills.component';
import { ContactComponent } from './components/sections/contact/contact.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ClickOutsideDirective } from './directives/clickOutsite.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    IntroductionComponent,
    AboutComponent,
    ExperienceComponent,
    BaseLayoutComponent,
    SkillsComponent,
    ContactComponent,
    ClickOutsideDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, environment.TRANSLATE_URL, '.json');
}
