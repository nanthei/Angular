import { Component, OnInit } from '@angular/core';
import { LocService } from '../loc.service';

@Component({
  selector: 'app-loc-list',
  templateUrl: './loc-list.component.html',
  styleUrls: ['./loc-list.component.scss']
})
export class LocListComponent implements OnInit {

  public locations: any = [];
  public locationsInfo: any = {};
  public page: number = 1;

  constructor(private locService: LocService) {}

  ngOnInit(): void {
    this.getLocations();
  }
 
  getLocations() {
    this.locService.getLocations(this.page).subscribe((data: any) => {
      this.locations = data.results;
      this.locationsInfo = data.info;
    });
  }

  nextPage() {
    if (this.page <this.locationsInfo.pages){
      this.page++;
      }
    this.getLocations();
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
    }
    this.getLocations();
  }

}
