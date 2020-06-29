import {Component} from '@angular/core';
import {NgxUiLoaderService} from "ngx-ui-loader";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isExpanded = false;
  element: HTMLElement;
  menuActivated = false;

  constructor(private ngxLoader: NgxUiLoaderService) {
    ngxLoader.start();
    setTimeout(()=>{
      this.ngxLoader.stop();

    },2000)
  }

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
