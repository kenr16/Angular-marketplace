import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Album } from '../album.model';
//All of the above are necessary for importing url details to a page.
import { AlbumService } from '../album.service'; //First step of pulling in Big Data.


@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  providers: [AlbumService] //Second step in pulling in Big Data.
})
export class AlbumDetailComponent implements OnInit {
  albumId: number;  //This will be passed through the URL
  albumToDisplay: Album;  //This will be found with the number passed through the URL.

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private albumService: AlbumService //Third step in pulling in Big Data.
  ) { }
  //These updates to the constructor are needed to retrieve url data

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.albumId = parseInt(urlParameters['id']); //This is where we finally pull the data from the URL and assign it.
    });
    this.albumToDisplay = this.albumService.getAlbumById(this.albumId); //This line retrieves a specific album from the id provided in the URL.
  }

}
