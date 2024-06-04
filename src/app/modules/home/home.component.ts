import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { FormsModule } from '@angular/forms';
import { NzRateComponent } from 'ng-zorro-antd/rate';
import {NgClass, NgOptimizedImage} from '@angular/common';
import { ObjectDetectionVisualizerComponent } from '../../shared/Object-detection-visualizer/Object-detection-visualizer.component';

interface APIResponse {
  data: Data;
}

interface Data {
  id: string;
  type: string;
  org_url: string;
  title: string;
  description: string;
  objects: Object[];
}

interface Object {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  is_popular: boolean;
  rate: number;
}
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
  imports: [ObjectDetectionVisualizerComponent, NgClass, NzRateComponent, FormsModule, NgOptimizedImage]
})
export class HomeComponent implements OnInit {
  selectedFilterId!:number
  response!:Data;
  constructor(private srv: HomeService) { }

  ngOnInit() {
    this.srv.getList().subscribe((res : APIResponse) => {
      this.response = res['data'];
      console.log(this.response);

    })
  }

  filterSelected(id:number){
    this.selectedFilterId = id
  }

}
