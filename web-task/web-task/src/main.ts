import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app'; // El import debe coincidir con el nombre de la clase

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));