import { Component, OnInit, Input } from '@angular/core';
import { EpService } from '../../../services/ep.service';

@Component({
  selector: 'app-ep-char-list',
  templateUrl: './ep-char-list.component.html',
  styleUrls: ['./ep-char-list.component.scss']
})
export class EpCharListComponent implements OnInit {

  @Input() ep : any; 
  public char = {};

  constructor(private epService: EpService) { }

  ngOnInit(): void {
  }

} 
