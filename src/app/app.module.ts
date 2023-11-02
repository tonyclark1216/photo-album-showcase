import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhotosListComponent } from './pages/photos-list/photos-list.component';
import { PhotoComponent } from './components/photo/photo.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PhotosListComponent,
    PhotoComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
