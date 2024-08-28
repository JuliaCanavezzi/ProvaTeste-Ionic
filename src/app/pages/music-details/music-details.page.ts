import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Music } from 'src/app/models/music';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-music-details',
  templateUrl: './music-details.page.html',
  styleUrls: ['./music-details.page.scss'],
})
export class MusicDetailsPage implements OnInit {


  music : Music = {} as Music;
  constructor(private service : MusicService,
              private activedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activedRoute.snapshot.paramMap.get('id');

    if(id){
      this.service.getMusicById(id).subscribe(
        {
        next: music => this.music = music
        }
    );
    }
  }


}
