import { Component, OnInit, Input } from '@angular/core';
import { EpService } from '../ep.service';

@Component({
  selector: 'app-char-card',
  templateUrl: './char-card.component.html',
  styleUrls: ['./char-card.component.scss']
})
export class CharCardComponent implements OnInit {

  @Input() charUrl : any; 
  public char : any;


  constructor(private epService: EpService) { }

  ngOnInit(): void {
    this.epService.getEpisodeByUrl(this.charUrl).subscribe(data => {
      this.char = data;
    });
  }

} 