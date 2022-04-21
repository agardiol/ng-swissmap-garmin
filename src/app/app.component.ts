import { Component, OnInit } from '@angular/core';
import { GeoAdminAPIService } from './services/geo-admin-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-swissmap-garmin';

  display: string = '';

  constructor(
    private _geoAdminAPIService: GeoAdminAPIService,
  ) { }

  ngOnInit(): void {
    this._geoAdminAPIService.getLayersMetadata().subscribe(value => {

      this.display = value;
    })
  }
}
