import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PhotosService } from './photos.service';
import { HttpClientModule } from '@angular/common/http';


describe('PhotosService', () => {
  let service: PhotosService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PhotosService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('validateAlbumId() should take input valid input between 1 and 100', () => {
    expect(service.validateAlbumId(1)).toBeTruthy();
  });

  it('validateAlbumId() should take input only greater than 0', () => {
    expect(service.validateAlbumId(0)).toBeFalsy();
  });

  it('validateAlbumId() should take input only less than or equal to 100', () => {
    expect(service.validateAlbumId(101)).toBeFalsy();
  });

  it('validateAlbumId() should take input only as whole numbers', () => {
    expect(service.validateAlbumId(1.12)).toBeFalsy();
  });

  it('getPhotoListById() should http GET photos', () => {

    const mockData = [{
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
    }];

    service.getPhotoListById(1).subscribe((res) => {
      expect(res).toEqual(mockData);
    });

    const req = httpMock.expectOne(`https://jsonplaceholder.typicode.com/photos?albumId=1`);
    expect(req.request.method).toEqual("GET");
    req.flush(mockData);

    httpMock.verify();
  });
});