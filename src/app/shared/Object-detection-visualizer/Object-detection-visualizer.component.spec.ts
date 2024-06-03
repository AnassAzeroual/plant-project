/* tslint:disable:no-unused-variable */
import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { ObjectDetectionVisualizerComponent } from './Object-detection-visualizer.component';

describe('ObjectDetectionVisualizerComponent', () => {
  let component: ObjectDetectionVisualizerComponent;
  let fixture: ComponentFixture<ObjectDetectionVisualizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [ObjectDetectionVisualizerComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectDetectionVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
