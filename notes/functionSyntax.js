//function expression
//if you want to return something from the function, 
//you must use return keyword
function add(a,b){
    return a + b
};

let sum 

// arrow function
const add1 = (a,b) => {
    return a + b
};

//shorthand notation
const add2 = (a,b) => a + b
//we dont need {} and the return keyword is implied

//another implicit return // jsx // only works with react
// const someComponent = () => (
//     <div>
//         <h1>heyo</h1>
//         <h1>multiple lines</h1>
//     </div>
// )

//or do jsx with return keyword
// const someComponent = () => {
//    return(
//     <div>
//         <h1>heyo</h1>
//         <h1>multiple lines</h1>
//     </div>
// );
//};