// callback hell

const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure("Connection Timeout :(");
        } else {
            success(`Here is your fake data from ${url}`);
        }
    }, delay);
};

// fakeRequestCallback(
//     "books.com/page1",
//     function (response) {
//         console.log("It worked!!!");
//         console.log(response);
//         fakeRequestCallback("books.com/page2", function (response) {
//             console.log("It worked again!!!");
//             console.log(response);
//             fakeRequestCallback(
//                 "books.com/page3",
//                 function (response) {
//                     console.log("It worked for the third time!!!");
//                     console.log(response);
//                 },
//                 function (err) {
//                     console.log("Error (3rd req)!!!", err);
//                 }
//             );
//         });
//     },
//     function (err) {
//         console.log("Error!!!", err);
//     }
// );

// promises
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject("Connection Timeout :(");
            } else {
                resolve(`Here is your fake data from ${url}`);
            }
        }, delay);
    });
};

// fakeRequestPromise("yelp.com/api/coffee/page1")
//     .then(() => {
//         console.log("Promise resolved!");
//         fakeRequestPromise("yelp.com/api/coffee/page2")
//             .then(() => {
//                 console.log("Promise resolved (2nd req)!");
//                 fakeRequestPromise("yelp.com/api/coffee/page3")
//                     .then(() => {
//                         console.log("Promise resolved (3rd req)!");
//                     })
//                     .catch(() => {
//                         console.log("Promise rejected (3rd req)!");
//                     });
//             })
//             .catch(() => {
//                 console.log("Promise rejected (2nd req)!");
//             });
//     })
//     .catch(() => {
//         console.log("Promise rejected!");
//     });

fakeRequestPromise("yelp.com/api/coffee/page1")
    .then((data) => {
        console.log("IT WORKED!!!!!! (page1)");
        console.log(data);
        return fakeRequestPromise("yelp.com/api/coffee/page2");
    })
    .then((data) => {
        console.log("IT WORKED!!!!!! (page2)");
        console.log(data);
        return fakeRequestPromise("yelp.com/api/coffee/page3");
    })
    .then((data) => {
        console.log(data);
        console.log("IT WORKED!!!!!! (page3)");
    })
    .catch((err) => {
        console.log("OH NO, A REQUEST FAILED!!!");
        console.log(err);
    });
