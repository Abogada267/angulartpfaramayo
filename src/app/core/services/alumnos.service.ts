import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { alumno } from '../../alumno'; 
import { MessageService } from '../../core/services/massage.service'; 
export class AlumnosService {
  private alumnosUrl = AlumnosService.AlumnosUrl; 

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  static AlumnosUrl: any;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getAlumnos(): Observable<alumno[]> {
    return this.http.get<alumno[]>(this.alumnosUrl)
      .pipe(
        tap(_ => this.log('fetched alumnos')),
        catchError(this.handleError<alumno[]>('getAlumnos', []))
      );
  }

  getAlumnoNo404<Data>(id: number): Observable<alumno> {
    const url = `${this.alumnosUrl}/?id=${id}`;
    return this.http.get<alumno[]>(url)
      .pipe(
        map(alumnos => alumnos[0]), 
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} alumno id=${id}`);
        }),
        catchError(this.handleError<alumno>(`getAlumno id=${id}`))
      );
  }

  getAlumno(id: number): Observable<alumno> {
    const url = `${this.alumnosUrl}/${id}`;
    return this.http.get<alumno>(url).pipe(
      tap(_ => this.log(`fetched alumno id=${id}`)),
      catchError(this.handleError<alumno>(`getAlumno id=${id}`))
    );
  }

  searchAlumnos(term: string): Observable<alumno[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<alumno[]>(`${this.alumnosUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found alumnos matching "${term}"`) :
         this.log(`no alumnos matching "${term}"`)),
      catchError(this.handleError<alumno[]>('searchAlumnos', []))
    );
  }

  addAlumno(alumno: alumno): Observable<alumno> {
    return this.http.post<alumno>(this.alumnosUrl, alumno, this.httpOptions).pipe(
      tap((newAlumno: alumno) => this.log(`added alumno w/ id=${newAlumno.id}`)),
      catchError(this.handleError<alumno>('addAlumno'))
    );
  }

  deleteAlumno(alumno: alumno | number): Observable<alumno> {
    const id = typeof alumno === 'number' ? alumno : alumno.id;
    const url = `${this.alumnosUrl}/${id}`;

    return this.http.delete<alumno>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted alumno id=${id}`)),
      catchError(this.handleError<alumno>('deleteAlumno'))
    );
  }

  updateAlumno(alumno: alumno): Observable<any> {
    return this.http.put(this.alumnosUrl, alumno, this.httpOptions).pipe(
      tap(_ => this.log(`updated alumno id=${alumno.id}`)),
      catchError(this.handleError<any>('updateAlumno'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`AlumnosService: ${message}`);
  }
}

