import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string = '';
  displayedMessage: string = 'Hello World';

  displayMessage() {
    this.displayedMessage = this.message;
  }
}
