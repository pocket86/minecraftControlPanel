import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
  <h1>{{pageTitle}}</h1>
  <mc-login></mc-login>
  `
})
export class AppComponent {
	pageTitle: string = "Server Control Panel"
 }
