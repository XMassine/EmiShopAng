import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideHttpClient, withFetch} from "@angular/common/http";
import { initializeApp } from "firebase/app";
import {provideFirebaseApp } from '@angular/fire/app';
import {getAuth , provideAuth } from '@angular/fire/auth'
import { AngularFireAuthModule } from '@angular/fire/compat/auth'

import { AngularFireAuth } from '@angular/fire/compat/auth';
import {  FirebaseAppModule} from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';



const firebaseConfig = {
  apiKey: "AIzaSyA7ACYYYLW7bW5WmvLR5GYs_QEj31SJ0yk",
  authDomain: "massineapp-91d08.firebaseapp.com",
  projectId: "massineapp-91d08",
  storageBucket: "massineapp-91d08.firebasestorage.app",
  messagingSenderId: "331046593620",
  appId: "1:331046593620:web:f600ceaaaa594ab8b7f9c1",
  measurementId: "G-TDJDNTPC81"
};

/*
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient()]
}
 */
importProvidersFrom(AngularFireModule.initializeApp(firebaseConfig))
importProvidersFrom(AngularFireAuth)
importProvidersFrom(AngularFireAuthModule)

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideClientHydration(),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    importProvidersFrom(
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireAuthModule,
      FirebaseAppModule
    )




  ],
};



