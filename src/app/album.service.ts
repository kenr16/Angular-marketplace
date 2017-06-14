import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './mock-albums';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'; //Required to retrieve data from firebase.

@Injectable()
export class AlbumService {
  albums: FirebaseListObservable<any[]>; //Required for firebase

  constructor(private database: AngularFireDatabase) {
    this.albums = database.list('albums');
  }  //Required for frirebase.

  getAlbums() {
    return this.albums;
  }

  getAlbumById(albumId: number){
    for (var i = 0; i <= ALBUMS.length - 1; i++) {
      if (ALBUMS[i].id === albumId) {
        return ALBUMS[i];
      }
    }
  }

}
