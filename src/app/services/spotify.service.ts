import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

    artistas:any [] = [];



    URL_BUSQUEDA:string = "https://api.spotify.com/v1/search?";

    URL_ARTISTA : string = "https://api.spotify.com/v1/artists/";

    URL_TOP_TRACKS : string = "https://api.spotify.com/v1/artists/";

    TOKEN:string = "BQCjhf_xypz7yd5EfwQgWuqKt-770di0_qcrPfBGyt7yRWUoC4pVHgsMDn8oewrsqAL8mDXQ_TwNTa9DA-JUXtNP_XgdySxQXVQy2gUkEZypObHWmH6Dx8ZipVdB2q9ZVToWETxHSsiz0Y0";

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

    getArtista ( artistaId:string ) {
        let url = this.URL_ARTISTA + artistaId;
        let headers = new Headers();
        headers.append('authorization', 'Bearer '+this.TOKEN);

        return this.http.get ( url , {headers} ).map(
            resultado=>{
                return resultado.json();
            }
        );
    }

    getTop ( artistaId:string ){


        let url = this.URL_TOP_TRACKS + "" + artistaId + "/top-tracks?country=ES";
        let headers = new Headers();
        headers.append('authorization', 'Bearer '+this.TOKEN);

        return this.http.get ( url , {headers} ).map(
            resultado=>{
                return resultado.json().tracks;
            }
        );
    }

}
