import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzMenuDirective, NzMenuItemComponent } from 'ng-zorro-antd/menu';
import { NzDropdownButtonDirective, NzDropDownDirective, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: true,
    imports: [NzDropdownButtonDirective, NzDropDownDirective, NzDropdownMenuComponent, NzMenuDirective, NzMenuItemComponent, RouterLink]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
