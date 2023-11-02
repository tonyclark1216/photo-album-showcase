import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../../models/photo.model';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent {

  public albumId: number;
  public photosList: Photo[];
  public validationText: string;

  constructor(private photosService: PhotosService){
    
  }

  getPhotoListById(){
    if(!this.photosService.validateAlbumId(this.albumId)) {
      this.validationText = "Please enter a valid whole number between 1 and 100"
      return;
    }
    this.validationText = "";
    this.photosService.getPhotoListById(this.albumId).subscribe(res => {
      this.photosList = res;
    });
  }

  enterSubmit(event: KeyboardEvent){
    if(event.key == "Enter") this.getPhotoListById();
  }
  
}
