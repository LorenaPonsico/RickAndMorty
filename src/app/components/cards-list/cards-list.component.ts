import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from 'src/app/_services/rick-and-morty.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit {
  characters: any;

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.rickAndMortyService.getCharacters().subscribe(data => {
      this.characters = data;
      console.log(this.characters); // Puedes manejar los datos de la respuesta aquí
    });
  }
}
