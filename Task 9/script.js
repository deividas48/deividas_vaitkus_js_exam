/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(argTitle, argDirector, argBudget) {
    this.title = argTitle;
    this.director = argDirector;
    this.budget = argBudget;
  }
  wasExpensive(budget) {
    return this.budget > 100000000;
  }
}

const MovieClass = new Movie("test", "test", 1000999999000);
console.log(MovieClass.wasExpensive());