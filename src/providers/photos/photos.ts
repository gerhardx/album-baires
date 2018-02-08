import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

/*
  Generated class for the PhotosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PhotosProvider {

  album1: any = [];
  album2: any = [];
  album3: any = [];

  constructor(
    // public http: HttpClient,
    public http: Http
  ) {
    let url = 'https://jsonplaceholder.typicode.com/photos';
    this.http.get(url)
              .subscribe(response => {
                console.log(JSON.parse(response['_body']));
                let temp = JSON.parse(response['_body']);
                console.log(temp[0]);
                for (let i = 0; i < temp.length; i++) {
                   if (temp[i]['albumId'] === 1) {
                       this.album1.push(temp[i]);
                   };
                   if (temp[i]['albumId'] === 2) {
                       this.album2.push(temp[i]);
                   };
                   if (temp[i]['albumId'] === 3) {
                       this.album3.push(temp[i]);
                   };
                };
              });
  }

  getAlbum1(){
    // return this.album1;
  }

}
