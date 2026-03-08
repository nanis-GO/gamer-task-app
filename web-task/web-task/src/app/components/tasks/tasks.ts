import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Vital para que funcione el input de añadir

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  // Variable para capturar lo que escribes en el input
  nuevaTarea: string = '';

  // Tu lógica exacta
  tareas = [
      { texto: 'Estudiar Angular', done: true },
      { texto: 'Práctica de estilos', done: false },
  ];

  // Tu función para marcar/desmarcar
  toggle(t: any) { 
    t.done = !t.done; 
  }

  // ++ AÑADIDO: Función para añadir la tarea a tu arreglo ++
  add() {
    if (this.nuevaTarea.trim()) {
      this.tareas.push({ texto: this.nuevaTarea, done: false });
      this.nuevaTarea = ''; // Limpia el input después de añadir
    }
  }
}