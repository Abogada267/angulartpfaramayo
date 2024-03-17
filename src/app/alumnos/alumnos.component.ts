import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno';
import { AlumnosService } from '../core/services/alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'], 
})
export class AlumnosComponent implements OnInit {

  alumnos: Alumno[] = [];
  alumno: Alumno;
  selectedAlumno: Alumno = { id: 1, name: 'Angelina', edad: 26 };
  
  constructor(private alumnosService: AlumnosService) {
    this.alumno = this.selectedAlumno;
  }

  ngOnInit(): void {
    this.getAlumnos(); 
  }

  getAlumnos(): void {
    this.alumnosService.getAlumnos()
      .subscribe(
        (alumnos: Alumno[]) => {
          this.alumnos = alumnos;
        },
        (error: any) => {
          console.error('Error fetching alumnos:', error);
        }
      );
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.alumnosService.addAlumno({ name } as Alumno)
      .subscribe(
        (alumno: Alumno) => {
          this.alumnos.push(alumno);
        },
        (error: any) => {
          console.error('Error adding alumno:', error);
        }
      );
  }

  deleteAlumno(valorAEliminar: Alumno): void {
    this.alumnosService.deleteAlumno(valorAEliminar)
      .subscribe(
        () => {
          console.log('Alumno eliminado correctamente');
          this.alumnos = this.alumnos.filter((alumno: Alumno) => alumno !== valorAEliminar);
        },
        (error: any) => {
          console.error('Error al eliminar alumno:', error);
        }
      );
  }
}


