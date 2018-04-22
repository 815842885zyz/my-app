import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  
  getHeroes() :Hero[] {
    /*return of(HEROES);*/
    this.messageService.add("heroService:fetched heroes");
   // return of(HEROES);
    return HEROES;
  }
  constructor(private messageService:MessageService) { }

}
