import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit {
  profileForm!: FormGroup;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Cargamos los datos actuales del servicio
    const data = this.authService.userProfile;
    this.profileForm = new FormGroup({
      nickname: new FormControl(data.nickname, Validators.required),
      email: new FormControl(data.email, [Validators.required, Validators.email]),
      bio: new FormControl(data.bio)
    });
  }

  save() {
    if (this.profileForm.valid) {
      // Guardamos los cambios de vuelta en el servicio
      this.authService.userProfile = this.profileForm.value;
      alert('STATS UPDATED!');
    }
  }
}