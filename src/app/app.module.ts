import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PricingComponent } from './pricing/pricing.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { IconComponent } from './shared/icon/icon.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './resume/skills/skills.component';
import { EducationComponent } from './resume/education/education.component';
import { ExperienceComponent } from './resume/experience/experience.component';
import { AchievementsComponent } from './resume/achievements/achievements.component';

@NgModule({
  declarations: [
    AppComponent, IconComponent, PricingComponent, MenuComponent, HomeComponent, ContactComponent,
    AboutComponent, ResumeComponent, SkillsComponent, EducationComponent, ExperienceComponent, AchievementsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
