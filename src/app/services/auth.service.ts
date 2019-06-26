import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable()

export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  signUp(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(result => result)
      .catch(error => error)
  }

  signIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(result => result)
      .catch(error => error)
  }


  googleAuth() {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(result => result)
      .catch(error => error)
  }

  facebookAuth() {
    return this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())
      .then(result => result)
      .catch(error => error)
  }

  signOut() {
    return this.afAuth.auth.signOut()
      .then(result => result)
      .catch(error => error)
  }

  getAuthState() {
    return this.afAuth.authState
  }

  getCurrentUser() {
    return this.afAuth.auth.currentUser
  }
} 