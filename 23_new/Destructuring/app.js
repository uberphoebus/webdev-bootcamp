// ===================
// ARRAY DESTRUCTURING
// ===================
const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

// const highScore = scores[0];
// const secondHighScore = scores[1];

const [gold, silver, bronze, ...everyoneElse] = scores;
console.log(gold);
console.log(silver);
console.log(bronze);
console.log(everyoneElse);

// ===================
// OBJECT DESTRUCTURING
// ===================
const user = {
    email: "harvey@gmail.com",
    password: "sCoTt1948sMiTh",
    firstName: "Harvey",
    lastName: "Milk",
    born: 1930,
    died: 1978,
    bio: "Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors",
    city: "San Francisco",
    state: "California",
};

const user2 = {
    email: "Stacy@gmail.com",
    firstName: "Stacy",
    lastName: "Gonzalez",
    born: 1987,
    city: "Tulsa",
    state: "Oklahoma",
};

const { email, firstName, lastName, city, bio } = user;
console.log(email);
console.log(firstName);
console.log(lastName);

const { born: birthYear, died: deathYear = "N/A" } = user2;
console.log(birthYear);
console.log(deathYear);

// ===================
// PARAM DESTRUCTURING
// ===================
function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}
console.log(fullName(user));

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

const highScore = movies.filter(({ score }) => score >= 90);
console.log(highScore);

const mapMovies = movies.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`;
});
console.log(mapMovies);
