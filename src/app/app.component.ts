import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent {
  selectedAlumno: {
    alumnos: {
      id: number;
      name: string;
    }[];
    id: number;
    name: string;
  } | undefined;

  title = 'EstudioJuridicoMalvinaAramayo&Capacitaciones';
}
