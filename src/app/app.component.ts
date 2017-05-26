import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  // template: `<h1>{{title}}</h1><h2>{{hero.name}} details!</h2>`,
  templateUrl: `./test.html`

})
export class AppComponent  {

  title = 'Tour of Heroes';

  hero: Hero = {
    id: 1,
    name: 'windstorm'
  }
}

export class Hero {
  id: number;
  name: string;
}
