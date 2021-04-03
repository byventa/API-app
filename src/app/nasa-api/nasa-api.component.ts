import { Component, OnInit } from '@angular/core';
import { DataService } from "../shared/data.service";

@Component({
  selector: 'app-nasa-api',
  templateUrl: './nasa-api.component.html',
  styleUrls: ['./nasa-api.component.scss']
})
export class NasaApiComponent implements OnInit {
  image: any;
  mapCoords: any = { lat: undefined, lng: undefined };
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.currentCoords.subscribe(mapCoords => {
      if (mapCoords.lat !== this.mapCoords.lat && mapCoords.lng !== this.mapCoords.lng) {
        this.mapCoords = mapCoords;
        this.getImages(this.mapCoords.lng, this.mapCoords.lat)
      }
    });
  }
  getImages(lon: number, lat: number) {
    return this.dataService.queryImage(lon, lat).subscribe((res: any) => {
      this.image = res.url;
    })
  }

}
