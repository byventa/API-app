import { Component, OnInit } from '@angular/core';
import { DataService } from "../shared/data.service";


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  mapCoords: any = { lat: undefined, lng: undefined };
  zoom = 4;
  markerPositions: google.maps.LatLngLiteral[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentCoords.subscribe(mapCoords => {
      console.log(mapCoords, this.mapCoords)
      console.log(mapCoords.lat !== this.mapCoords.lat && mapCoords.lng !== this.mapCoords.lngs)

      if (mapCoords.lat !== this.mapCoords.lat && mapCoords.lng !== this.mapCoords.lng) {
        this.mapCoords = mapCoords;
      }
    });
  }

}
