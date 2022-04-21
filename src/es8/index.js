const data = {
    frontend: 'Santiago',
    backend: 'Isabel',
    design: 'Ana'
}
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);



const data2 = {
    frontend: 'Santiago',
    backend: 'Isabel',
    design: 'Ana'
}


const values = Object.values(data2);
console.log(values);
console.log(values.length);
 

const string = 'Hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' -----'))
console.log('food'.padEnd(12, ' -----'))

// Para recordar las comas, la coma quiere decir que después de lo que acabamos de poner viene otro elemento en un objeto.
const obj = {
    name: 'Santiago',
}




//ASYNC AND AWAIT

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello world'), 3000)
            : reject(new Error('Test Error'))
    })
};


const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();


const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();  



