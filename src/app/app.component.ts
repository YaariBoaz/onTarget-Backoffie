import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isExpanded = false;
  element: HTMLElement;
  menuActivated = false;

  toggleActive(event: any) {
    console.log('in open')
    event.preventDefault();
    if (this.element !== undefined) {
      this.element.style.backgroundColor = 'white';
    }
    const target = event.currentTarget;
    target.style.backgroundColor = '#3b3838';
    this.element = target;
  }

  openSideNav(event: any) {
    event.preventDefault();
    if (this.element !== undefined) {
      this.element.style.backgroundColor = 'white';
    }
    const target = event.currentTarget;
    target.style.backgroundColor = '#3b3838';
    this.element = target;
  }

  closeSideNav(event: MouseEvent) {
    this.isExpanded = false
  }
}
