const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

let total = 0;
for (let price of prices) {
    total += price;
}
console.log(total);

const total2 = prices.reduce((total, price) => {
    return total + price;
});
console.log(total2);

const total3 = prices.reduce((total, price) => total + price);
console.log(total3);

const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
});
console.log(minPrice);

const movies = [
    {
        title: "Amadeus",
        score: 99,
        year: 1984,
    },
    {
        title: "Sharknado",
        score: 35,
        year: 2013,
    },
    {
        title: "13 Going On 30",
        score: 70,
        year: 2004,
    },
    {
        title: "Stand By Me",
        score: 85,
        year: 1986,
    },
    {
        title: "Waterworld",
        score: 62,
        year: 1995,
    },
    {
        title: "Jingle All The Way",
        score: 71,
        year: 1996,
    },
    {
        title: "Parasite",
        score: 95,
        year: 2019,
    },
    {
        title: "Notting Hill",
        score: 77,
        year: 1999,
    },
    {
        title: "Alien",
        score: 90,
        year: 1979,
    },
];

const highestRatedMovie = movies.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score) {
        return currMovie;
    }
    return bestMovie;
});
console.log(highestRatedMovie);

const evens = [2, 4, 6, 8];
const evenSum = evens.reduce((sum, num) => sum + num, 100);
console.log(evenSum);
