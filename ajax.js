async function Person() {
    let responce = await fetch('sddfdfd');
    result = await responce.json();
    console.log(result);
}

let user = new Person();

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandom(2, 3));

const name = 'des';
const age = 32;

const output = `привет, меня зовут ${name}, мне ${age < 20 ? 'tiny' : 'norm'} лет`;
console.log(output);


const name = 'Denys';
console.log(name.charAt(1));
console.log(name.indexOf('en'))
console.log(name.toLowerCase().startsWith('den'))


let counter = 0;
const interval = setInterval(function () {
    if (counter === 5) {
        clearInterval(interval)
    } else {
        console.log(++counter)
    }
}, 100)

let arr = ['mersedses', 'lachetti', 'kia', 'soul'];
arr.push('mazda');
console.log(arr);
arr.unshift('rio')
console.log(arr)
arr.shift();
console.log(arr)
arr.reverse();
console.log(arr)

const text = 'привет, мы изучаем JavaScript';
let arr2 = text.split(',');
console.log(arr2.reverse());


// const person = people.find((person =>   person.budget === 3500));
// console.log(person);

const fib = [1, 1, 2, 3, 5, 8, 13];
console.log(pow2Fib);

const people = [
    {name: 'ivan', budget: 1000},
    {name: 'vasa', budget: 3500},
    {name: 'ira', budget: 7600},
]


const getSumBudget = people.filter(function (person) {
    return person.budget > 2000
}).reduce((accconst pow2 = num => num ** 2;
const pow2Fib = fib.map(pow2).map(sqrt);
const sqrt = num => Math.sqrt(num);
const pow2FibFilter = fib.filter(num => num < 20);
// const pow2FibFilter = fib.filter(function (num) {
//     return num < 20
// })
, person) => {
    acc += person.budget
    return acc;
})

function getSum() {
    let args = [].call();
    if (args.length === 0) return 0;
    if (args.length === 1) return args[0];
    return args.shift() + sum.apply(sum, args);
}