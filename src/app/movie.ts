export class Movie {
    id: number;
    name: string;
    description!:string;
    imageUrl!:string;

  
    constructor() {
      this.id = 0; 
      this.name = ''; 
    }
  }
  