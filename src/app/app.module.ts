import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AlertModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ExperienceComponent } from './experience/experience.component';
import { NavComponent } from './share/nav/nav.component';
import { FooterComponent } from './share/footer/footer.component';

import { HomeService } from './services/home.service';
import { AboutUsService } from './services/about-us.service';
import { ExperienceService } from './services/experience.service';
import { BlogService } from './services/blog.service';
import { PortfolioService } from './services/portfolio.service';

import { ProfileComponent } from './profile/profile.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


import { TruncatePipe } from './customePipe/truncate';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './customePipe/searchPipe';

import { SkillComponent } from './skill/skill.component';
import { SkillService } from './services/skill.service';


@NgModule({
  declarations: [
    TruncatePipe,
    SearchPipe,
    AppComponent,
    AboutComponent,
    HomeComponent,
    PageNotFoundComponent,
    ExperienceComponent,
    NavComponent,
    FooterComponent,
    ProfileComponent,
    EducationComponent,
    ContactComponent,
    BlogComponent,
    PortfolioComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
     
    HttpClientModule,
    FormsModule,
    AlertModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'education', component: EducationComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'skill', component: SkillComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent, pathMatch: 'full' },
    ])
   
  ],
  providers: [
      HomeService,
      AboutUsService,
      ExperienceService,
      BlogService,
      PortfolioService,
      SkillService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
