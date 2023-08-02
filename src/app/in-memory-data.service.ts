import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const movies = [
      {id: 1, name: "Oppenheimer", description:"bomba gibi bir film!",imageUrl:"postero.jpg"},
      {id: 2, name: "Barbie", description:"Herkes icin eğlenceli bir komedi filmi!", imageUrl:"posterb.jpg"},
      {id: 3, name: "Saw", description:"korku dolu bir gerilim!", imageUrl:"posters.jpg"},
      {id: 4, name: "Mission Impossible", description:"aksiyon dolu bir macera!", imageUrl:"posterm.jpg"},
      {id: 5, name: "Transformers", description:"otobotların hikayesi devam ediyor..", imageUrl:"postert.jpg"}
  
  ];
  return { movies };
  }
  constructor() { }
}
