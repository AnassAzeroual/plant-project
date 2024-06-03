import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

constructor(private http:HttpClient) { }

getList(){
  // return this.http.get('http://localhost:3000/home');
  const data = {
    "data": {
      "id": "1234567890",
      "type": "articles",
      "org_url": "https://placehold.co/400x300",
      "title":"Les bleuets",
      "description": "Les bleuets sont des fleurs très appréciées pour leur facilité de culture et leur longue période de floraison.",
      "objects" :[
        {
          "id": 1,
          "title": "Bleuet champêtre Blue Boy",
          "description":"description...",
          "price": 5,
          "image": "https://placehold.co/400x300",
          "is_popular": true,
          "rate":2
        },
        {
          "id": 2,
          "title": "Rouge versaille",
          "description":"description...",
          "price": 5,
          "image": "https://placehold.co/200",
          "is_popular": false,
          "rate":4.5
        },
        {
          "id": 3,
          "title": "Jaune soleil",
          "description":"description...",
          "price": 5,
          "image": "https://placehold.co/150x100",
          "is_popular": false,
          "rate":3.5
        },
        {
          "id": 4,
          "title": "Orange bedoin",
          "description":"description...",
          "price": 5,
          "image": "https://placehold.co/300",
          "is_popular": true,
          "rate":5
        }
      ]
    }
  }
  return of(data)
}
}
