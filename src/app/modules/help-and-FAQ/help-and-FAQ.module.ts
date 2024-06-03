import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpAndFAQComponent } from './help-and-FAQ.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: '', component: HelpAndFAQComponent },
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        HelpAndFAQComponent
    ]
})
export class HelpAndFAQModule { }
