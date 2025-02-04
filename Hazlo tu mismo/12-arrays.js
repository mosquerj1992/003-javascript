


let myArray = ["Manzana", "Banana", "pera"];
console.log(myArray);


let arrayMixto = [9, "hola mundo", false, NaN, undefined];
console.log(arrayMixto);

let emptyArray = [];
console.log(emptyArray);

let tamanio =200;
let myCustomArray = [];
myCustomArray.length=tamanio;
console.log(myCustomArray);

let myNewArray = [];
for(let i=0; i<10; i++) {
    myNewArray
}

let array1 =['a','b','c','d' ];
let array2 =['e','f','g','h' ];

let array3 = array1.concat(array2);
console.log(array3);

let arrayJoin =new Array("hola", "mi","nombre","es","jorge");
let myString  = arrayJoin.join("");
console.log(myString);

///tomar el ujltimo elemnto en la ultima posiciondel aaray 
let arr1 =[1,2,3,4,5,6,7,8,9];
let StringPo = arr1.pop("");
console.log(StringPo);
console.log(arr1);

// push inserte un numero de la ultima posicion del array
let arr2 =[1,2,3,4,5,6,7,8,];
arr2.push(9);
console.log(arr2);

//reversa array
arr2.reverse();
console.log(arr2);

//ordena array
arr2.sort();
console.log(arr2);

//elimina  el primer elemento del array 
arr2.shift();
console.log(arr2);

//saber el indice de un elemento
console.log(arr2.indexOf(11)); 

let posicion = arr2.indexOf(7);
arr2.splice(posicion,2);
console.log(arr2);


//eliminar el elemento del array cuantas veces se elimina dos parametros 
arr2.splice(0,0,"1")
console.log(arr2);


///tarea

const months =['jan','march','april','june','june'];
months.splice();
console.log(months);


//corte  elementos de un ray 
const animal = ['ant','bison','camel','duck','elephat'];
console.log(animal.slice(2));
console.log(animal.slice(2,4));
console.log(animal.slice(1, 5));
console.log(animal.slice(-2));
console.log(animal.slice(2, -1));
console.log(animal);

add(35, 25,);
function add(a, b) {
    console.log(a + b);
    return a + b;
}
add(55, 45,);





