import {importProvidersFrom} from '@angular/core';
import {AppComponent} from './app/app.component';
import {FooterModule} from './app/modules/footer/footer.module';
import {SharedModule} from './app/shared/shared.module';
import {provideAnimations} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app/app-routing.module';
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {en_US, NZ_I18N} from 'ng-zorro-antd/i18n';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, FormsModule, SharedModule, FooterModule),
        { provide: NZ_I18N, useValue: en_US },
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations()
    ]
})
  .catch(err => console.error(err));
