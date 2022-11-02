import { SuperHeroService } from './services/super-hero.service';
import { SuperHero } from './models/super-hero';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'superhero-ui';
  heroes: SuperHero[] = [];

  constructor(private superHeroService: SuperHeroService)
  {
  }
  ngOnInit() : void
  {
    this.superHeroService
    .getSuperHeroes()
    .subscribe((result: SuperHero[]) => (this.heroes = result));
  }
}
