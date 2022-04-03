let arr = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
console.log(arr.join('|'));

let str = 'Вася;Петя;Вова;Олег';
let newArr = str.split(';');
console.log(typeof newArr);
console.log(newArr[0]);

function hello2(name) {
    if (name) {
        console.log('Привет,' + name)
    } else {
        console.log('привет, гость!')
    }
}

hello2('Вася');

const fruits = ['яблоко', 'ананас', 'груша'];
const fruitsInUpperCase = fruits.join().toUpperCase();
fruitsInUpperCase.split(',');
console.log(fruitsInUpperCase);


let addOneForAll = function (...argumetns) {
    return argumetns.map(argumetns => argumetns + 1)
}

console.log(addOneForAll(1, 2, 3, 4));


const val = function (...numbers) {
    if (numbers !== Number) {
        console.log("Введите число")
    } else {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        return console.log(sum);
    }
}

val(2, 2, 2);

const arr = [1, 'hello', 2, 3, 4, '5', '6', 7, null];
const numberArray = [];

arr.forEach(function (elem) {
    if (Number.isInteger(elem)) {
        numberArray.push(elem);
    }
})
console.log(numberArray);

const haveTrueValue = [0, false, null, 1];
const dontHaveTrueValue = [0, false, null, 0];

function arrayTesting(arr) {
    arr.forEach(function (elem) {
        if (Boolean.apply(elem) === true) {
            console.log('нашли true значение')
        } else {
            console.log('ничего нет');
        }
    })
}


function arrayTesting(arr) {
    for (let item of arr) {
        if (item !== 0 || item !== null || item !== NaN || item !== false || item !== "" || item !== undefined)  {
            return console.log('ничего нет')
        } else {
            return console.log('true найдено')
        }
    }
}

if (item === false) {

}
arrayTesting();