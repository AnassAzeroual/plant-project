import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {NgOptimizedImage, registerLocaleData} from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './modules/footer/footer.module';
import { SharedModule } from './shared/shared.module';

registerLocaleData(en);

@NgModule({ declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        SharedModule,
        FooterModule,
        NgOptimizedImage], providers: [
        { provide: NZ_I18N, useValue: en_US },
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
