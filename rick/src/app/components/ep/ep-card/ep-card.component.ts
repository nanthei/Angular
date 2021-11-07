import { Component, OnInit, Input } from '@angular/core';
import { EpService } from '../../../services/ep.service';

@Component({
  selector: 'app-ep-card',
  templateUrl: './ep-card.component.html',
  styleUrls: ['./ep-card.component.scss']
})
export class EpCardComponent implements OnInit {

  @Input() epUrl : any; 
  public ep : any;


  constructor(private epService: EpService) { }

  ngOnInit(): void {
    this.epService.getEpisodeByUrl(this.epUrl).subscribe(data => {
      this.ep = data;
    });
  }

} 