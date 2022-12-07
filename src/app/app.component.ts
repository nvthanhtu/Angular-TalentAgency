import { Component } from '@angular/core';
import { SideNavComponent } from './side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'talentAgency';
  time = new Date();
  welcomeMessage = "welcome message";
}
