import { Component } from '@angular/core';

// component declaration. selector is html tag you use to embed your component. templateurl is the HTML file we use. styleurls (can have more than 1) is css.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// classes - put any properties of the component here, and any methods, custom and lifecycle methods (kinda like react class components)
// lets define title as a string with TS
export class AppComponent {
  
}
