import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment } from '@enviroment/environment';
import { Character } from '@shared/interfaces/character.interface';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  searchCharacters(query='', page= 1){
    const filter = `${environment.baseurlAPI}/?name=${query}&page=${page}`;
    return this.http.get<Character[]>(filter);
  }
  getDetails(id:number){
    return this.http.get<Character>(`${environment.baseurlAPI}/${id}`);
  }
}
