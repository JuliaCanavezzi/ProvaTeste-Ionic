import { Component, OnInit } from '@angular/core';
import { Music } from 'src/app/models/music';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {

  musics: Music[] = []

  constructor(private musicService : MusicService) { }

  ngOnInit() {
    this.loadMusics();
  }
  loadMusics(){
    this.musicService.getMusics().subscribe(
      {
        next: musics => this.musics = musics
      }
    )
    }
  }

