import { AutenticationService } from './../autentication.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ToolbarComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;

  constructor(private _service: AutenticationService) { }

  ngOnInit() {
    this.isLoggedIn$ = this._service.isLogged;
  }

  onLogout() {
    this._service.signOut();
  }

  login() {
    this._service.signInWithFB();
  }

}
