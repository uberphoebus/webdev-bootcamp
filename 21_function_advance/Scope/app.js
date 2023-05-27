function collectEggs() {
    let totalEggs = 6;
    console.log(totalEggs);
}
collectEggs();

// lexical scope
function bankRobbery() {
    const heroes = ["Spiderman", "Wolverine", "Black Panther", "Batman"];
    function cryForHelp() {
        function inner() {
            for (let hero of heroes) {
                console.log(`Please help us, ${hero.toUpperCase()}`);
            }
        }
        inner();
    }
    cryForHelp();
}
bankRobbery();
