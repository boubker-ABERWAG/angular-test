import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  s:string = 'Hello';

  

  tel:string = '0123456987';

  vrai: boolean = true;

  // enseignant
  nom:string = "JACK";
  prenom:String = "James";
  numero:number = 125;
  dateNaissance:string = '1990-01-01';
  dateEmbauche:string = "2010-01-01";
  sexe:string = 'M';
  grade:string = 'ABC';
  photo:string = 'http://www.aaege-israel.org/wp-content/uploads/2013/09/logo-enseignant.jpg'




}
