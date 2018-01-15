export default store => next => action => {
    // Code goes here
    console.log('Logger: ', action);
    const result = next(action);
    return result;
}

// // Above his short hand version of code below
// export default function (store) {
//     return function (next) {
//         return function (action) {
//             // Code goes here
//         }
//     }
// }