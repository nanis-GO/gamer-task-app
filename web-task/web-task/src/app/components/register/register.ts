import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; /* ++ AÑADIDO: Necesario para que funcione el *ngIf ++ */

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule], /* ++ AÑADIDO: CommonModule ++ */
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  regForm = new FormGroup({
    user: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  doRegister() {
    if (this.regForm.valid) alert('¡Clan unido con éxito!');
  }
}