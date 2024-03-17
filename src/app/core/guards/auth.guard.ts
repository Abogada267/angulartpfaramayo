import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../layout/auth/auth/auth.service';

export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Aquí puedes poner la lógica de autorización
    if (this.authService.isLoggedIn()) {
      return true; // Permite la navegación si el usuario está autenticado
    } else {
      // Si el usuario no está autenticado, redirige a la página de inicio de sesión
      return this.router.parseUrl('/login');
    }
  }
}