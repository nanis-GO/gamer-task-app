import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav class="main-nav">
      <div class="nav-links">
        <a routerLink="/login" routerLinkActive="active">Login</a>
        <a routerLink="/register" routerLinkActive="active">Registro</a>
        <a routerLink="/tasks" routerLinkActive="active">Tareas</a>
        <a routerLink="/profile" routerLinkActive="active">Perfil</a>
      </div>
    </nav>

    <router-outlet></router-outlet>
  `,
  styles: [`
    .main-nav {
      background: #161223;
      padding: 1rem;
      display: flex;
      justify-content: center;
      border-bottom: 1px solid #29b6d155;
    }
    .nav-links a {
      color: #888;
      text-decoration: none;
      margin: 0 15px;
      font-weight: bold;
      font-size: 14px;
      transition: 0.3s;
    }
    .nav-links a:hover { color: #29b6d1; }
    .nav-links a.active {
      color: #29b6d1;
      border-bottom: 2px solid #29b6d1;
      padding-bottom: 5px;
    }
      .nav-gamer {
  background: #161320; /* El mismo que las tarjetas */
  border-bottom: 1px solid #29b6d144;
  padding: 15px;
  display: flex;
  justify-content: center;
  gap: 30px;
}
  `]
})
export class App { }