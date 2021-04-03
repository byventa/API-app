import { Component, OnInit } from '@angular/core';
import { DataService } from "../shared/data.service";
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  loc = new FormControl('');
  mapCoords: any;

  locations: any = []
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loc.valueChanges.subscribe(val => {
      this.getLocations(val);
    });
    this.dataService.currentCoords.subscribe(mapCoords => this.mapCoords = mapCoords);
  }
  getLocations(val: string) {
    return this.dataService.queryLocations(val).subscribe((res: {}) => {
      this.locations = res;
    })
  }
  getCoords(latitude: any, longitude: any) {
    console.log(latitude, longitude)
    latitude = parseFloat(latitude);
    longitude = parseFloat(longitude);
    this.dataService.changeCoords({ lat: latitude, lng: longitude })
  }


}
