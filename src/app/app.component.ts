import { Component } from '@angular/core';
import { NzMenuDirective, NzMenuItemComponent } from 'ng-zorro-antd/menu';
import { NzModalComponent } from 'ng-zorro-antd/modal';
import { FooterComponent } from './modules/footer/footer.component';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgTemplateOutlet, NgClass } from '@angular/common';
import { NzLayoutComponent, NzSiderComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent } from 'ng-zorro-antd/layout';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [NzLayoutComponent, NzSiderComponent, NgTemplateOutlet, NzHeaderComponent, RouterLink, NzIconDirective, NzContentComponent, RouterOutlet, NzFooterComponent, FooterComponent, NzModalComponent, NgClass, NzMenuDirective, NzMenuItemComponent]
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
