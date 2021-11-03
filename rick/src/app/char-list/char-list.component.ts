import { Component, OnInit } from '@angular/core';
import { CharService } from '../char.service';

@Component({
  selector: 'app-char-list',
  templateUrl: './char-list.component.html',
  styleUrls: ['./char-list.component.scss'],
})
export class CharListComponent implements OnInit {
  public characters: any = [];
  public charactersInfo: any = {};
  public page: number = 1;

  constructor(private charService: CharService) {}

  ngOnInit(): void {
    this.getCharacters();
  }
 
  getCharacters() {
    this.charService.getCharacters(this.page).subscribe((data: any) => {
      this.characters = data.results;
      this.charactersInfo = data.info;
    });
  }

  nextPage() {
    if (this.page <this.charactersInfo.pages){
    this.page++;
    }
    this.getCharacters();
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
    }
    this.getCharacters();
  }
}
