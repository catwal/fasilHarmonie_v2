import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {SearchResponse, TrackAndKey} from '../models/tracksAndKeys';
import {catchError, debounceTime, map, startWith, switchMap} from 'rxjs/operators';



const clientId = environment.spotifyClient_id;
const clientSecret = environment.spotifyClient_secret;

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private token: any;
  private error: any;
  private apiToken = '/api/token';
  // TODO : résoudre pb appel en build
 // private callToken = 'https://accounts.spotify.com/api/token';
  private apiUrlSearch = 'https://api.spotify.com/v1/search?q=';
  private apiUrlIdKey = '	https://api.spotify.com/v1/audio-features/?ids=';
  private httpHeaders = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      Authorization: 'Basic ' + btoa(clientId + ':' + clientSecret),
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };
    private httpOptions: any;

  constructor(private http: HttpClient) { }

  getToken() {
      return this.http.post(this.apiToken, 'grant_type=client_credentials', this.httpHeaders).subscribe(
            (data: any) => {
                console.log(data);
                console.log(data.access_token);
                this.token = data.access_token;
            }, error => {
                console.log('error : ', JSON.stringify(error));
                this.error = true;
                // recherche du token refresh
            }, () => {
                console.log('completed');

            });
  }

  getSearch(searchTerm: string): Observable<any> {
      this.httpOptions = {
          headers: new HttpHeaders({
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + this.token
          })
      };

      const searchSongs = new Observable((observer) => {
          this.http.get<any>(this.apiUrlSearch + searchTerm + '&type=track', this.httpOptions)
              .subscribe((songs: any) => {
               console.log(songs.tracks.items),
             observer.next(songs.tracks.items);
          });
      });
      return searchSongs;
  }

}
