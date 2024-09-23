import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'titlebar.html',
  styleUrls: ['titlebar.css'],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
