import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MarsRoverApiPhotos } from '../mars-rover-api-photos.service';

@Component({
  selector: 'app-rover-form',
  templateUrl: './rover-form.component.html',
  styleUrls: [ './rover-form.component.css' ],
  providers: [ MarsRoverApiPhotos ]
})

export class RoverFormComponent {
  photos: any[];
  noPhotos: boolean=false;
  constructor(private marsRoverPhotos: MarsRoverApiPhotos) { }

  getRoverImages(date: string, camera: string) {
    this.photos=null;
    this.marsRoverPhotos.getByDateAndCamera(date, camera).subscribe(response => {
      if(response.json().photos.length > 0) {
        this.photos = response.json();
      }
    });
  }
}

//this.marsRoverPhotos.getByDateAndCamera(date, camera) returns an Observable, so we call the subscribe() method on it. This allows us to call the json() method on the response to cast the it as a Javascript object. By doing this, we can render our results in the browser without using an async pipe. (The async pipe is useful, but some developers feel that it clutters up the template. We'll leave it up to you to choose which to use.) We use the fat arrow so this remains scoped to our class so we can update the photos property. Notice that we declare an instance of the service marsRoverPhotos in our constructor in the same way we did for our other services.
