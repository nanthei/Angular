import { Component, OnInit, Input } from '@angular/core';
import { EpService } from '../ep.service';

@Component({
  selector: 'app-char-ep-list',
  templateUrl: './char-ep-list.component.html',
  styleUrls: ['./char-ep-list.component.scss']
})
export class CharEpListComponent implements OnInit {

  @Input() char : any; 
  public ep = {};

  constructor(private epService: EpService) { }

  ngOnInit(): void {

  }

}