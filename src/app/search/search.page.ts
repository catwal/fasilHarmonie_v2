import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { FormControl } from '@angular/forms';
import { TrackAndKey} from '../models/tracksAndKeys';
import {Observable, of} from 'rxjs';
import {catchError, debounceTime, map, startWith, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  songsCtrl = new FormControl();
  filteredSongs: Observable<TrackAndKey[]>;



  constructor(private spotifyService: SpotifyService) {
    this.spotifyService.getToken();
   }

  ngOnInit() {
    this.filteredSongs = this.songsCtrl.valueChanges.pipe(
        startWith(''),
        debounceTime(300),
        switchMap(value => {
          if (value !== '') {
            return this.callApi(value);
          } else {
            return of(null);
          }
        }));
    console.log(this.songsCtrl);
  }


  callApi(value: string): Observable<TrackAndKey> {
    return this.spotifyService.getSearch(value.toLowerCase()).pipe(
        map(results => results),
        catchError( () => {
          return of(null);
    })
    );
  }
}
