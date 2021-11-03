import { Component, OnInit, Input } from '@angular/core';
import { LocService } from '../loc.service';

@Component({
  selector: 'app-loc-char-list',
  templateUrl: './loc-char-list.component.html',
  styleUrls: ['./loc-char-list.component.scss']
})
export class LocCharListComponent implements OnInit {

  @Input() loc : any; 
  public char = {};

  constructor(private epService: LocService) { }

  ngOnInit(): void {
  }

}
 