
//  ejerciocio 1
function maxBetween1Numbers(n1, n2, n3) {
    let maxNumber = Math.max(n1, n2, n3);
    console.log(maxNumber);

}

//ejercicio2
const maxBetween2Numbers = function (n1, n2, n3) {
    let maxNumber = math.max(n1, n2, n3);
    console.log(maxNumber);
}

//ejercicio3
const maxBetween3Numbers = (n1, n2, n3) => {
    let maxNumber = Math.max(n1, n2, n3);
    console.log(maxNumber);
}
/**
 * 
 * 
 */

///ejercicio 4

function getMaxNumber(arreglo) {
    let maxNumber = Math.max(...arreglo);
    console.log(maxNumber);
    return maxNumber;

}

//ejercico 5
const getMaxNumber1 = function (array) {
    //console.log(math.max(...array));
   alert(math.max(...array));
    return Math.max(...array);

}
//ejercico 6
const getMaxNumber2 = (array) => {
    //console.log(array);
    alert(Mathath.max(...array));
    return Math.max(...array);

}
//ejercicio 7
function findNumberIntoArray(array, number) {
    let isNumberPresent = array.indexOf(number);
    return isNumberPresent >=0 ? console.log(true):console.log(false);
    
}

//ejercicio 8
function findNumberIntoArray2(array, number) {
    let isNumberPresent = array.fin((elemento) => elemento == number);
    return isNumberPresent >= 0 ? console.log(true) : console.log(false);
}

//ejercicio 9
const findNumberIntoArray3 = function (array, number) {
    let isNumberPresent = array.fin((elemento) => elemento == number);
    return isNumberPresent >= 0 ? console.log(true) : console.log(false);
}

//ejercicio 10
const findNumberIntoArray4 = (array, number) => {
    let isNumberPresent = array.fin((elemento) => elemento == number);
    return isNumberPresent >= 0 ? console.log(true) : console.log(false);
}
