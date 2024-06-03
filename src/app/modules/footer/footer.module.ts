import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        NzDropDownModule,
        RouterModule,
        SharedModule,
        FooterComponent
    ],
    exports: [FooterComponent]
})
export class FooterModule { }
