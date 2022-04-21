// JAVASCRIPT PURO O NATIVO.

function newFunction(name, age, country) {
    var name = name || 'Santiago';
    var age = age || 17;
    var country = country || "CO";
    console.log(name, age, country);
};
newFunction();


let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);



let lorem = "Qui consequatur. comodi. Ipsum vel duis yet minima \n" + "otra frase epica que necesitamos."

console.log(lorem);


let person = {
    'name': 'Oscar',
    'age': 32,
    'country': 'CO'
}

console.log(person.name, person.age, person.country);



let name2 = 'Santiago';
let age2 = 32;

obj = { name: name2, age: age2 };

console.log(obj);


const names = [
    { name: 'Santiago', age: 17 },
    { name: 'Kevin', age: 27 }
];

let listOfNames = names.map(function (item) {
    console.log(item.name);
})






// ECMASCRIPT 6.


function newFunction2(name1 = 'Santiago', age1 = 17, country1 = 'CO') {
    console.log(name1, age1, country1);
};
newFunction2();
newFunction2('Ricardo', '23', 'CO');



let hello2 = "Hello";
let world2 = "World";
let epicPhrase2 = `${hello2} ${world2}`;
console.log(epicPhrase2);



let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
`;
console.log(lorem2);



let person2 = {
    'name': 'Oscar',
    'age': 32,
    'country': 'CO'
}
let { name, age, country } = person2;
console.log(name, age, country);



let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);



let name3 = 'Santiago';
let age3 = 32;

obj2 = { name3, age3 };
console.log(obj2);



const names2 = [
    { name: 'Santiago', age: 17 },
    { name: 'Kevin', age: 27 }
];

let listOfNames2 = names2.map(item => console.log(item.name));

let listOfNames3 = (name, age, country) => {
    //Bloque de código
}

const listOfNames4 = name => {
    //Bloque de código
}

const square = num => num * num; //Función flecha más corta


const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!');
        } else {
            reject('Ups!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola'))
    .catch(error => console.log(error))




class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));



import { hello } from './module';

hello();



function* helloWorld() {
    if (true) {
        yield 'Hello , ';
    }
    if (true) {
        yield 'World';
    }
};


const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);




// Podemos acceder a var si estamos fuera del bloque de código también.
{
    var globalVar = "Global Var";
}
// No podemos acceder a let si no estamos dentro de el mismo bloque de código.
{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

console.log(globalVar);

// Las constantes no pueden cambiar su valor luego de ser asignados.

const a = 'b';
a = 'a'; //XXX no se puede hacer.









