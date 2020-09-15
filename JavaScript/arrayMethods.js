// const myArr = [
//     {todo: "HTML", status: "complete", days: 20},
//     {todo: "CSS", status: "complete", days: 10},
//     {todo: "JavaScript", status: "in-progress", days: 20},
//     {todo: "Bootstrap", status: "incomplete", days: 10},
//     {todo: "jQuery", status: "incomplete", days: 15},
//     {todo: "AngularJS", status: "incomplete", days: 15}
// ];
// console.log(`Training Tasks:`);
// const trainingTasks = myArr.map((arr)=> {
//     return arr.todo;
// })
// console.log(trainingTasks);

// console.log(`\nCompleted Tasks:`);
// const completeTasks = myArr.filter((arr)=> {
//     return arr.status.toLowerCase() === "complete";
// })
// console.log(completeTasks);

// console.log(`\nRemaining Tasks:`);
// const incompleteTasks = myArr.filter((arr)=> {
//     return arr.status.toLowerCase() === "incomplete";
// })
// console.log(incompleteTasks);

// console.log(`\nIn-progress Tasks:`);
// const findTasks = myArr.find((arr)=> {
//     return arr.status.toLowerCase() === "in-progress";
// }) 
// console.log(findTasks);

// const totaldays = arr.reduce((arr)=> {

// })


// console.log(`\narr.some() Method`);
// const hasCompletedTasks = myArr.some((arr)=> {
//     return arr.status == "completed";
// })
// console.log(hasCompletedTasks);


// // console.log(`\narr.every() Method`);
// // const hasTasks = myArr.every((arr)=> {
// //     return arr.status == 
// // })

// console.log(`\nTraining Tasks using forEach() & toUpperCase()`);
// myArr.forEach((arr)=> {
//     console.log(arr.todo.toUpperCase());
// })


// let myNewArr = ["BLAH", "BLEH", "BLUE"];
// console.log(`\narr.includes() Method`);
// const hasElement = myNewArr.includes("blue"); //case-sensitive
// console.log(hasElement);

// console.log(`\narr.join() Method`);
// const allElements = myNewArr.join(", ");
// console.log(allElements);

var arr1= [1, 2, 3, 4];
const result = arr1.reduce(add, -2)
    function add(total, num) {
        return total + num;
    }
console.log(result);