import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

    artistas:any [] = [];

    URL_BUSQUEDA:string = "https://api.spotify.com/v1/search?";

    TOKEN:string = "BQBtK0YdzB8EJTsYyBgLA-jvw0vKA8PpEok-kBoFW1JD7a8tovyQp-XpdbxwqPT3_EKoISqrWK9lW7VTO5qmGsMEpDYgronX4OriFrgXBTRpgcZkN09221QPRzpHeauKK_lwtSmxHLfx7Y0";

    constructor( private http:Http) { }

    getArtistas( termino:string ) {


        let query = `q=${ termino }&type=artist`;
        let url = this.URL_BUSQUEDA + query;
        let headers = new Headers();
        headers.append('authorization','Bearer '+this.TOKEN);

        /*
        * Observable
        * Que siga trabajando pero siga pendiente de la información
        */
        return this.http.get( url, {headers} ).map(
            res=>{
                this.artistas = res.json().artists.items;
            }
        );

    }

}
