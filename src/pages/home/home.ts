import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhotosProvider } from '../../providers/photos/photos';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  album1: any = [];
  album2: any = [];
  album3: any = [];

  constructor(
    public navCtrl: NavController,
    public albums: PhotosProvider,
    public http: Http
  ) {
    let url = 'https://jsonplaceholder.typicode.com/photos';
    this.http.get(url)
              .subscribe(response => {
                // console.log(JSON.parse(response['_body']));
                let temp = JSON.parse(response['_body']);
                // console.log(temp[0]);
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

  ngOnInit() {
     // console.log(this.albums.getAlbum1());
  }

}
