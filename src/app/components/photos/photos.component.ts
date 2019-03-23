import { Component, OnInit } from '@angular/core';
import{ PhotosService }from '../../services/photos.service';
import{ Photo } from '../../Models/photo';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos:Photo[]=[];
 
  constructor(private photosService: PhotosService) { }

  ngOnInit(){
    this.photosService.getPhotos().
    subscribe(photos =>{console.log(photos);
                        this.photos = photos},
    err => console.log(err)
    )
  }

}
