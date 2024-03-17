import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno';
import { AlumnosService } from '../core/services/alumnos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl:  './dashboard.component.css', 
})
export class DashboardComponent implements OnInit {
  Alumnos: Alumno[] | undefined;
  

  constructor(private alumnosService: AlumnosService) { }

  ngOnInit() {
    this.getAlumnos();
  }

  getAlumnos(): void {
    this.alumnosService.getAlumnos()
      .subscribe((alumnos: Alumno[]) => this.Alumnos = alumnos);
  }
}
