import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { handleErrorResponseInterceptor } from '@core/interceptors/handle-error-response.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withFetch(), withInterceptors([handleErrorResponseInterceptor])),
    provideFirebaseApp(() => initializeApp(environment.firebase_config)), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
