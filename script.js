'use strict';

let film = [
    [],
    [],
    [],
];


film[0][0]= prompt('Geben Sie ersten Ihren Filmtitel ein:');
film[0][1] = prompt('Geben Sie das Veröffentlichungsjahr des ersten Filmes ein:');

film[1][0] = prompt('Geben Sie Ihren zweiten Filmtitel ein:');
film[1][1] = prompt('Geben Sie das Veröffentlichungsjahr zweiten des Filmes ein:');

film[2][0] = prompt('Geben Sie Ihren dritten Filmtitel ein:');
film[2][1] = prompt('Geben Sie das Veröffentlichungsjahr des dritten Filmes ein:');

for (let i = 0; i < film.length; i++) {
    console.log(film[i]);
};