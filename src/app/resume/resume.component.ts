import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  @ViewChild('skills', { static: true}) skills;
  @ViewChild('experience', { static: true}) experience;
  @ViewChild('education', { static: true}) education;
  @ViewChild('achievements', { static: true}) achievements;

  public tabs = [
    {
      title: 'Technology Expertise',
      description: 'Bachelors degree in Computer Science, Microsoft Certified Professional Developer',
      id: 'skills',
    },
    {
      title: 'Work Experience',
      description: 'I\'ve worked in a startup, medium size and world largest technology consulting company',
      id: 'experience',
    },
    {
      title: 'Education',
      description: 'Bachelors degree in Computer Science, Microsoft Certified Professional Developer',
      id: 'education',
    },
    {
      title: 'Achievements',
      description: 'Achievements',
      id: 'achievements',
    },
  ];

  public ngOnInit(): void {
    this.showTab(window.location.hash.split('#')[1]);

    fromEvent(window, 'hashchange').pipe(
      takeUntil(this.destroy$)
    ).subscribe((evt: HashChangeEvent) => {
      this.showTab(evt.newURL.split('#')[1]);
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
  }

  public getTemplate(id: string) {
    return this[id];
  }

  private showTab(hash: string): void {
    if (!hash) {
      return;
    }
    const el = document.getElementById(hash);
    if (el) {
      el.classList.add('show');
      el.scrollIntoView(true);
      setTimeout(() => {
        el.scrollIntoView(true);
      }, 100);
    }
  }
}
