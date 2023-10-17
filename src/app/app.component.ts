import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from './_services/rick-and-morty.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  characters: any;

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.rickAndMortyService.getCharacters().subscribe(data => {
      this.characters = data;
      console.log(this.characters); // Puedes manejar los datos de la respuesta aquí
    });
  }
}
