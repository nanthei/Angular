import { Component, OnInit } from '@angular/core';
import { CharService } from '../char.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-char-detail',
  templateUrl: './char-detail.component.html',
  styleUrls: ['./char-detail.component.scss']
})
export class CharDetailComponent implements OnInit {

  public char: any;
  private id : string | null;

  constructor(private route: ActivatedRoute, private charService: CharService) {
    this.id = this.route.snapshot.paramMap.get("id");
  }

ngOnInit(): void {
  this.charService.getCharacter(this.id).subscribe(data => {
    this.char = data;
  });
}

}