import { Component, OnInit } from '@angular/core';
import { CharService } from '../../../services/char.service';

@Component({
  selector: 'app-char-list',
  templateUrl: './char-list.component.html',
  styleUrls: ['./char-list.component.scss'],
})
export class CharListComponent implements OnInit {
  public characters: any = [];
  public charactersInfo: any = {};
  public errors: any;

  public page: number = 1;
 
  public searchOptions = {
    'name': '',
    'status': ''
  }

  constructor(private charService: CharService) {}

  ngOnInit(): void {
    this.getCharacters();
  }
 
  filterCharacters(name: string) {
    // alert("Character List Komponentas Suzinojo apie onForm Submit Event'a is SearchForm komponento ");
    this.searchOptions.name = name;
    this.getCharacters();
  }
 
  getCharacters(name?: string) {
    this.charService.getCharacters(this.page, this.searchOptions.name)
      // Subscribe funkcija naudojama dirbant su Observable tipo objektais (Angular httpClient visada grazina Observabile tipa)
      // data - kintamasis su grazintais duomenimis is musu uzklausos
      .subscribe(
        // Jei uzklausa buvo ivykdyta sekmingai
        // Success callback
        (data: any) => {
          // Gautus duomenis priskiriame komponento kintamajam
          // Characters kintamajam, priskiriame duomenis is characterService getCharaters funkcijos
          this.characters = data.results;
          this.charactersInfo = data.info;
        },
 
        // Jei grazintas error status code
        // Error callback
        (error: any) => {
 
          // Patikriname error status koda
          if (error.status == '404') {
            alert("oops nothing found");
            console.log(error);
 
            // Priskiriame error objekta savo komponento errors masyvui,
            // kad galetume atvaizduoti klaidos pranesima template dalyje
            this.errors = error;
 
            // Nustatome characters masyva i tuscia masyva, nes nebuvo rasta jokiu veikeju
            this.characters = [];
            // Taip pat pakeiciame charactersInfo objekto reiksmes pagal klaidos koda
            this.charactersInfo.count = 0;
            this.charactersInfo.pages = 0;
          } else {
            alert("oops went wrong");
          }
 
        }
 
        // console.log(data);
        /*
        Dokumentacija kokie duomenys grazinami:
        https://rickandmortyapi.com/documentation/#character-schema
        */
      );
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
