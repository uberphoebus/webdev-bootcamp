// https://swapi.dev/api/people/1/

// using fetch
fetch("https://swapi.dev/api/people/1/")
    .then((res) => {
        console.log("fetch RESOLVED", res);
        return res.json();
    })
    .then((data) => {
        console.log(data);
        return fetch("https://swapi.dev/api/people/2/");
    })
    .then((res) => {
        console.log("fetch SECOND REQUEST RESOLVED");
        return res.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.log("fetch ERROR!", e);
    });

// using async await
const loadStarWarsPeople = async () => {
    const res = await fetch("https://swapi.dev/api/people/1/");
    const data = await res.json();
    console.log("await");
    console.log(data);
    const res2 = await fetch("https://swapi.dev/api/people/2/");
    const data2 = await res2.json();
    console.log("await");
    console.log(data2);
};

loadStarWarsPeople();
