import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dublinbike } from 'src/app/models/dublinbike';
import { DublinbikeService } from 'src/app/services/dublinbike.service';

@Component({
  selector: 'app-station-detail',
  templateUrl: './station-detail.component.html',
  styleUrls: ['./station-detail.component.css']
})
export class StationDetailComponent implements OnInit {


  dublinBikeStation: Dublinbike | any;
  bikeStationId: number  = 0;

  constructor( private route: ActivatedRoute, private dublinBikeService: DublinbikeService
  
  
  ) { }

  ngOnInit(): void {

    this.getBikeStation();
  }

  getBikeStation() {

    this.bikeStationId = Number(this.route.snapshot.paramMap.get('id'));
    // console.log(`The currnt bike station is ${this.bikeStationId}`)

    this.dublinBikeService.getStation(this.bikeStationId).subscribe(station => {
      console.log(station);
      this.dublinBikeStation = station;
    })
  }

}
