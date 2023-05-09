let todoList = [];
let isQuit = false;
while (!isQuit) {
    let input = prompt("What would you like to do?");
    if (input === "new") {
        let newTodo = prompt("Enter new todo");
        todoList.push(newTodo);
        console.log(`${newTodo} added to the list`);
    } else if (input === "list") {
        console.log("**********");
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i}: ${todoList[i]}`);
        }
        console.log("**********");
    } else if (input === "delete") {
        let index = parseInt(prompt("Enter index of todo to delete"));
        if (!Number.isNaN(index)) {
            let deletedTodo = todoList.splice(index, 1);
            console.log(`${deletedTodo} is deleted`);
        } else {
            console.log("Unknown index");
        }
    } else if (input === "quit") {
        isQuit = true;
    } else {
        console.log("Invalid input");
    }
}
console.log("OK, YOU QUIT THE APP");
