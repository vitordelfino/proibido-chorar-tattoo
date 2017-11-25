import { AuthService, SocialUser, FacebookLoginProvider } from 'angular4-social-login';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';

@Injectable()
export class AutenticationService {

  private user: SocialUser;
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private authService: AuthService) {

    this.authService.authState.subscribe((user) => {
      if (user) {
        this.user = user;
        this.loggedIn.next(true);
      }else {
        this.loggedIn.next(false);
      }
    });
  }

  get isLogged() {
    return this.loggedIn.asObservable();
  }

  get userLogged() {
    return this.user;
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
  }

  signOut(): void {
    this.authService.signOut();
  }

}
