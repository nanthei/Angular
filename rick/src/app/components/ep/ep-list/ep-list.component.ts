import { Component, OnInit } from '@angular/core';
import { EpService } from '../../../services/ep.service';

@Component({
  selector: 'app-ep-list',
  templateUrl: './ep-list.component.html',
  styleUrls: ['./ep-list.component.scss']
})
export class EpListComponent implements OnInit {

  public episodes: any = [];
  public episodesInfo: any = {};
  public page: number = 1;

  constructor(private epService: EpService) {}

  ngOnInit(): void {
    this.getEpisodes();
  }
 
  getEpisodes() {
    this.epService.getEpisodes(this.page).subscribe((data: any) => {
      this.episodes = data.results;
      this.episodesInfo = data.info;
    });
  }

  nextPage() {
    if (this.page <this.episodesInfo.pages){
      this.page++;
      }
    this.getEpisodes();
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
    }
    this.getEpisodes();
  }

}
 