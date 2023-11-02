import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from '../models/photo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }


  getPhotoListById(albumId: number): Observable<Photo[]>{
    return this.http.get<Photo[]>(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
  }

  validateAlbumId(albumId: number): boolean{
    if(albumId > 0 
      && albumId <= 100 
      && albumId % 1 == 0) return true;
    return false;
  }
}
