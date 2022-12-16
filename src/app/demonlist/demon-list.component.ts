import { Component } from '@angular/core';
import {ApiService, ListDemon} from "../services/api.service";

@Component({
  selector: 'app-demon-list',
  templateUrl: './demon-list.component.html',
  styleUrls: ['./demon-list.component.scss']
})
export class DemonListComponent {

  demons: ListDemon[] = [];

  constructor(private apiService: ApiService) {
    this.apiService.getDemonList().subscribe((data: ListDemon[]) => {
      this.demons = data;
    });
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
