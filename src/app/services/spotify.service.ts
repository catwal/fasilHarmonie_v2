import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const clientId = environment.spotifyClient_id;
const clientSecret = environment.spotifyClient_secret;

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private token: any;
  private error: any;
  private apiToken = '/api/token';
  private callToken = 'https://accounts.spotify.com/api/token';
  private apiUrlSearch = 'https://api.spotify.com/v1/search?q=';
  private apiUrlIdKey = '	https://api.spotify.com/v1/audio-features/?ids=';


  private httpHeaders = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      Authorization: 'Basic ' + btoa(clientId + ':' + clientSecret),
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };

  constructor(private http: HttpClient) { }



  getToken() {
    return this.http.post(this.apiToken, 'grant_type=client_credentials', this.httpHeaders).subscribe(
      data => {
        console.log(data);
        // console.log(data["access_token"]);
        // this.token = data.access_token;
      }, error => {
        console.log('error : ', JSON.stringify(error));
        this.error = true;
        // recherche du token refresh
      }, () => {
        console.log('completed');

      });
  }

}
