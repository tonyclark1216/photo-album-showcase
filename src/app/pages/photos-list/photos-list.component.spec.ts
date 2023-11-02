import { ComponentFixture, TestBed, async, fakeAsync, inject, tick } from '@angular/core/testing';

import { PhotosListComponent } from './photos-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Photo } from 'src/app/models/photo.model';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { PhotosService } from 'src/app/services/photos.service';
import { PhotoComponent } from 'src/app/components/photo/photo.component';

describe('PhotosListComponent', () => {
  let component: PhotosListComponent;
  let photosService: PhotosService;
  let fixture: ComponentFixture<PhotosListComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      declarations: [PhotosListComponent, PhotoComponent],
      providers: [PhotosService]
    });
   
  });

  beforeEach(inject([PhotosService], (service: PhotosService) => {
    photosService = service;
    fixture = TestBed.createComponent(PhotosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }))

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("getPhotoListById() should call getPhotoListById() in the service and fill photo list", fakeAsync(() => {
    const response: Photo[] =  [{
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
      "albumId": 1,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "https://via.placeholder.com/600/771796",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
      "albumId": 1,
      "id": 3,
      "title": "officia porro iure quia iusto qui ipsa ut modi",
      "url": "https://via.placeholder.com/600/24f355",
      "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    }]
    
    spyOn(photosService, 'getPhotoListById').and.returnValue(of(response))
    component.albumId = 1;
    component.getPhotoListById();
  
    fixture.detectChanges();
      
    expect(component.photosList).toEqual(response);
  }));
});
