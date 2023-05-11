import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CubeComponent } from './shared/cube/cube.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { Portfolio } from './services/portfolio.service';
import { ExperienceComponent } from './components/experience/experience.component';
import { RouteArrowsComponent } from './shared/route-arrows/route-arrows.component';
import { SkillComponent } from './components/skill/skill.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AboutMe } from './services/about-me.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    CubeComponent,
    PortfolioComponent,
    CatalogComponent,
    ExperienceComponent,
    RouteArrowsComponent,
    SkillComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Portfolio, AboutMe],
  bootstrap: [AppComponent]
})
export class AppModule { }

