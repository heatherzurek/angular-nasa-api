import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: [ './photos-list.component.css' ],
  providers: [ ]
})

export class PhotosListComponent {
  @Input() childPhotos;
  constructor() { }

  ngOnInit() {
  }

}
