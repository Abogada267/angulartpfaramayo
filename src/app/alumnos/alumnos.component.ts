import { Component, OnInit } from '@angular/core';
import { alumno } from '../alumno';
import { AlumnosService } from '../core/services/alumnos.service';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'], 
})
export class AlumnosComponent implements OnInit {
  selectalumnos: alumno | undefined;
  alumnos: alumno[] | undefined;


  constructor(private AlumnosService: AlumnosService) {} 
  
  
  ngOnInit(): void {
    this.getAlumnos();
  }

  
  getAlumnos(): void {
    this.AlumnosService.getAlumnos()
        .subscribe((alumnos: alumno[] | undefined) => this.alumnos = alumnos);
  }
  
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.AlumnosService.addAlumno({ name } as alumno)
      .subscribe((alumno: alumno) => {
        this.alumnos!.forEach(item => {
          
        });
        
       
        this.alumnos!.push(alumno);
      });
  }

  deleteAlumno(valorAEliminar: alumno): void {
    if (this.alumnos) {
      
      this.alumnos.forEach(alumno => {
        
      });
    }
    this.AlumnosService.deleteAlumno(valorAEliminar).subscribe(
      () => {
        console.log('Alumno eliminado correctamente');
      },
      (      error: any) => {
        console.error('Error al eliminar alumno:', error);
      }
    );
  }
  
}
 
 
