import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appName = 'Search Product'
  isCollapsed = false;
  isVisible: boolean = false;

  change(e: boolean) {
    this.isCollapsed = e //=== <= >= !==
  }

  headerTriggerClick() {
    this.isCollapsed = !this.isCollapsed;
  }

  /* -------------------------------------------------------------------------- */
  /*                                 Modal code                                 */
  /* -------------------------------------------------------------------------- */
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
