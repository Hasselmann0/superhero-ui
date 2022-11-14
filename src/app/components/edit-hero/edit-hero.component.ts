import { SuperHeroService } from './../../services/super-hero.service';
import { SuperHero } from './../../models/super-hero';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {

  @Input() hero?: SuperHero;

  @Output() heroesUpdated = new EventEmitter<SuperHero[]>();

  constructor(private superHeroService: SuperHeroService){}


  ngOnInit(): void {
  }

  updateHero(hero : SuperHero){
    this.superHeroService
    .updateHero(hero)
    .subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes));
  }

  deleteHero(hero : SuperHero){
    this.superHeroService
    .deleteHero(hero)
    .subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes));
  }

  createHero(hero : SuperHero){
    this.superHeroService
    .createHero(hero)
    .subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes));
  }
}
