import { Component, OnInit } from '@angular/core';  //OnInit is necessary for using large data files to execute the GetAlbums function.
import { Album } from '../album.model';
import { Router } from '@angular/router';  //Important to a specific route with an ID.
import { AlbumService } from '../album.service'; //The first step in pulling data from a database.
import { FirebaseListObservable } from 'angularfire2/database'; //Required to read data from Firebase.
@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService]  //This line is added to pull data from the service.
})


export class MarketplaceComponent implements OnInit {

  // albums: Album[]; //After the creation of the mock file, this element is no longer filly-fledged.
  albums: FirebaseListObservable<any[]>;//Once again redefined to pull info from firebase.


  //constructor(private router: Router){}  //Second component to the ID route.
  constructor(private router: Router, private albumService: AlbumService) {}  //AlbumService is added in for importation of data.

  ngOnInit(){
    this.albums = this.albumService.getAlbums(); //Last line required for pulling data from the service.
  }


  goToDetailPage(clickedAlbum: Album) {
    this.router.navigate(['albums', clickedAlbum.id]);  //Third component reqired for the use of a specific ID route.
    //  this.router.navigate(['/albums']); // This is an important line that allows you to route navigation in the javascript without sending an ID along as well.
   };



}
