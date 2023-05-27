const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el);
    }
});

for (let el of numbers) {
    console.log(el);
}

movies = [
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
];

movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`);
});
