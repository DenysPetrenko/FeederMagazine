// function getNumber(number) {
//
//     let sum = 0;
//     for (let i = 0; i < number; i++) {
//         Math.pow(i, i);
//         for (let j = 0; j < number; j++) {
//             sum += i;
//         }
//     }
//     return console.log(sum);
// }
//
// getNumber(4);
//
// function getSumSortArray(array) {
//     let newArr = [];
//     let sum = 0;
//     for (let item of array) {
//         if (item > 2 && item < 20) {
//             newArr.push(item);
//             for (let j = 0; j < newArr.length; j++) {
//                 sum += j;
//             }
//         }
//     }
//     return console.log(sum);
// }
//
// let arr = [3, 5, 12, 9, 23, 93, 17];
// getSumSortArray(arr);
//
// let ars = [[1, 6, 3, '6'], [10, 15, 13, '10']];
//
// function getSumEvenNumbers(array) {
//     let sum = 0;
//     array.forEach(num => {
//         if (num % 2 === 0) sum += num
//     });
//     return console.log(sum);
// }
//
// getSumEvenNumbers(ars);
//
// // муторный вариант
// function bindFunc(func, context, ...args) {
//     return function (...rest) {
//         const uniqStr = Date.now().toString();
//         context[uniqStr] = func;
//         const res = context[uniqStr](...args, ...rest);
//         delete context[uniqStr];
//         return res;
//     }
// }
// // тоже самое, но с дополнительной проверкой ключа
// function bindF (fn, context, ...rest) {
//     return function (...args) {
//         const uniqId = Date.now().toString() + Math.random();
//         context[uniqId] = fn;
//         const result = context[uniqId](...rest.concat(args));
//         delete context[uniqId];
//         return  result;
//     }
// }
//
// const bind = (fn, context, ...boundArgs) => (...args) =>
//     fn.apply(context, [...boundArgs, ...args]);
//
//  //самый простой
// function fBind(fn, context,...argumetns) {
//     return fn.call(context, ...argumetns);
// }
//
//
//
// function getInfo (name) {
//     console.log(this.name)
// }
//
// const  person    = {
//     name: 'ivan'
// }
//
// fBind(getInfo, person)
//
// function getSum() {
//     let args = [].call();
//     if (args.length === 0) return 0;
//     if (args.length === 1) return args[0];
//     return args.shift() + sum.apply(sum, args);
// }
//
// function getSum2() {
//     let numTotal = 0;
//   let total = [].reduce(function (sum, current) {
//         return sum + current;
//     }, 0);
// }
//
// function getNewArray (arr) {
//     let resArr = [];
//  for (let item in arr) {
//      if (!Number.isInteger(item)) {
//          console.log('не найдено');
//      }
//       elseif (item === Number && item % 2 == 0 &&  item > 2 && item < 10)
//              resArr.push(item);
//
//
//  } return resArr;
// }
//
// const valObject0 =
//     [1, '2', 4, 8, '8',  3, 10, null, false];
//
//
// function getNewArr (arr) {
//     arr.forEach(element => console.log(element))
// }
//
//
// const valObject0 = {
//     values: [1, '2', 4, 8, '8',  3, 10, null, false]}
// console.log(getNewArr(valObject0));


const logget = {
    keys() {
        console.log(this.keys());
    }
}

logget;

setTimeout(() => {

}, 2500)

clearTimeout()

const a = {
    a: 1,
    b:2,
    c:3
}

// const b = {...a};
const b = {__proto__ :a};
console.log((b.a));