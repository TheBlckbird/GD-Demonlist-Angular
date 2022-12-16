import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getApiList() {
    return;
  }

  getDemonList(): Observable<ListDemon[]> {
    const url = 'https://pointercrate.com/api/v2/demons/listed';

    return this.http.get<ListDemon[]>(url);
  }
}

export interface ListDemon {
  id: number
  position: number
  name: string
  requirement: number
  video: string
  thumbnail: string
  publisher: {
    id: number
    name: string
    banned: boolean
  }
  verifier: {
    id: number
    name: string
    banned: boolean
  }
  level_id: number
}
