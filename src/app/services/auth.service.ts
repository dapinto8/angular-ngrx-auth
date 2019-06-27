import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Injectable()

export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private fire: AngularFirestore,
    private router: Router,
    private ngZone: NgZone
  ) { }

  signUp(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  }

  signIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
  }

  googleAuth() {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(result => {
        this.createUser(result.user)
      })
      .catch(error => {
        console.log('googleAuthError', error)
      })
  }

  facebookAuth() {
    return this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())
      .then(result => {
        this.createUser(result.user)
      })
      .catch(error => {
        console.log('facebookAuthError', error)
      })
  }

  signOut() {
    return this.afAuth.auth.signOut()
      .then(result => {
        this.ngZone.run(() => {
          this.router.navigate(['/auth'])
        })
      })
  }

  getAuthState() {
    return this.afAuth.authState
  }

  getCurrentUser() {
    return this.afAuth.auth.currentUser
  }

  createUser(user) {
    this.fire.doc(`users/${user.uid}`).set({
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      phone: user.phoneNumber,
      photo: user.photoURL
    }).then(user => {
      this.ngZone.run(() => {
        this.router.navigate(['/home'])
      })
    })
  }
} 