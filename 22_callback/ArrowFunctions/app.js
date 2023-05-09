const movies = [
    {
        title: "Amadeus",
        score: 99,
    },
    {
        title: "Stand By Me",
        score: 85,
    },
    {
        title: "Parasite",
        score: 95,
    },
    {
        title: "Alien",
        score: 90,
    },
];

const add = (x, y) => {
    return x + y;
};
console.log(add(3, 4));

const square = (x) => {
    return x * x;
};
console.log(square(4));

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
};
console.log(rollDie());

const greet = (name) => {
    return `Hey ${name}!`;
};
console.log(greet("Tim"));

// implicit return
const rollDie2 = () => Math.floor(Math.random() * 6) + 1;
console.log(rollDie2());

// practice
const newMovies = movies.map(function (movie) {
    return `${movie.title} - ${movie.score / 10}`;
});
console.log(newMovies);

const newMovies2 = movies.map((movie) => {
    return `${movie.title} - ${movie.score / 10}`;
});
console.log(newMovies2);

const newMovies3 = movies.map(
    (movie) => `${movie.title} - ${movie.score / 10}`
);
console.log(newMovies3);
