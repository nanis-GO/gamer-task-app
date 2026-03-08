import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // Datos de Perfil
  userProfile = { nickname: 'GamerPro', email: 'pro@web-task.com', bio: 'Ready to play!' };

  // Datos de Tareas (Viven aquí para que no desaparezcan)
  tasks = [
    { title: 'Configurar entorno de batalla', completed: true },
    { title: 'Derrotar al jefe final (Bugs)', completed: false }
  ];

  constructor() {}

  // Método para añadir tareas al almacén central
  addTask(title: string) {
    this.tasks.push({ title, completed: false });
  }

  /* ++ AÑADIDO: Método para alternar el estado de la tarea ++ */
  toggleTask(task: any) {
    task.completed = !task.completed;
  }
}