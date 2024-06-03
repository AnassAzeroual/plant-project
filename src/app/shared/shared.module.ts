import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectDetectionVisualizerComponent } from './Object-detection-visualizer/Object-detection-visualizer.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from '../icons-provider.module';
import { NzModalModule } from 'ng-zorro-antd/modal';
const components = [
  ObjectDetectionVisualizerComponent
]
const ngZorro = [
  NzRateModule,
  IconsProviderModule,
  NzLayoutModule,
  NzMenuModule,
  NzModalModule
]

@NgModule({
    imports: [
        CommonModule,
        ...components,
    ],
    exports: [...components, ...ngZorro, FormsModule, ReactiveFormsModule],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class SharedModule { }
