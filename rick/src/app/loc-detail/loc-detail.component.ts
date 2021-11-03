import { Component, OnInit } from '@angular/core';
import { LocService } from '../loc.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-loc-detail',
  templateUrl: './loc-detail.component.html',
  styleUrls: ['./loc-detail.component.scss']
})
export class LocDetailComponent implements OnInit {

  public loc: any;
  private id : string | null;

  constructor(private route: ActivatedRoute, private charService: LocService) {
    this.id = this.route.snapshot.paramMap.get("id");
  }

ngOnInit(): void {
  this.charService.getLocation(this.id).subscribe(data => {
    this.loc = data;
  });
}

} 