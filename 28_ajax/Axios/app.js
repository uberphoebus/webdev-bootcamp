// using axios
axios
    .get("https://swapi.dev/api/people/1/")
    .then((res) => {
        console.log("RESPONSE: ", res);
    })
    .catch((e) => {
        console.log("ERROR: ", e);
    });

// using async await
const getStarWarsPerson = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data);
    } catch (e) {
        console.log("ERROR: ", e);
    }
};

getStarWarsPerson(5);
getStarWarsPerson(10);
getStarWarsPerson(15);

// joke generator
const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLi = document.createElement("li");
    newLi.append(jokeText);
    jokes.append(newLi);
};

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: "application/json" } };
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        // console.log(res.data.joke);
        return res.data.joke;
    } catch (error) {
        return "NO JOKES AVAILABLE! SORRY :(";
    }
};

button.addEventListener("click", addNewJoke);
