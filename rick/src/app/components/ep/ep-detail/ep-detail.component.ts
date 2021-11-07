import { Component, OnInit } from '@angular/core';
import { EpService } from '../../../services/ep.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-ep-detail',
  templateUrl: './ep-detail.component.html',
  styleUrls: ['./ep-detail.component.scss']
})
export class EpDetailComponent implements OnInit {

  public ep: any;
  private id : string | null;

  constructor(private route: ActivatedRoute, private charService: EpService) {
    this.id = this.route.snapshot.paramMap.get("id");
  }

ngOnInit(): void {
  this.charService.getEpisode(this.id).subscribe(data => {
    this.ep = data;
  });
}

} 