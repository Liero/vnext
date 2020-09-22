import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html'
})
export class IconComponent {

  @Input()
  svgClass;

  @Input()
  icon: string;
}
