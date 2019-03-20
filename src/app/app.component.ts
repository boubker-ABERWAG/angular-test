import { Component } from '@angular/core';
import { Enseignant } from './Enseignant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  s:string = 'Hello';

  

  tel:string = '0123456987';

  afficherLaListe: boolean = true;

  // enseignant
  nom:string = "JACK";
  prenom:String = "James";
  numero:number = 125;
  dateNaissance:string = '1990-01-01';
  dateEmbauche:string = "2010-01-01";
  sexe:string = 'M';
  grade:string = 'ABC';
  photo:string = 'http://www.aaege-israel.org/wp-content/uploads/2013/09/logo-enseignant.jpg'


        // enseigannt Objet
        enseignant:Enseignant = {
          id: 1,
          nom:'TOM',
          prenom: 'Eric',
          numero: 12345,
          dateEmbauche: '1990-01-01',
          dateNaissance: '1960-01-01',
          grade: 'ABC',
          sexe: 'M',
          photo: 'http://www.aaege-israel.org/wp-content/uploads/2013/09/logo-enseignant.jpg'
        };


      }
