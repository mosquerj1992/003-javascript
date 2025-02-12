let myArray = ['jorge','mosquera',33];
let [nombre,apellido,edad]=myArray

console.log(`El nombre es: ${nombre} ${apellido}, y su edad es: ${edad}`);
//console.log(myArray);

const numbers =[1,2,3,4,5];
let[one, two, three, four, five]=numbers

const colorList = ['blue', 'green', 'red', 'four', 'yellow', 'green'];

let [blue, green, yellow,]=['blue', 'green', 'yellow'];


const arrayPadre=[(1,2,3,4,5),(6,7,8,9,10)]
const[fila1,fila2]=arrayPadre;
//console.log(fila1,fila2)


//objetos

const user = {
    name: 'Jorge',
    age: 30,
    city: 'New York',
    useName:'mosquera',
    email: 'nuevaera769@hotmail.com',
    telefonos:['12345','67890']

};

//const {id, isVerified,userName,email,telefonos} =user;
//console.log (userName,telefonos,email);

//const [telf1,telf2]= telefonos;
//console.log[telf1,telf2];

//EJEMPLOS

//1
//const 0={p: 42,q:true};

//2

//3


//console.log(id,displayName,fullName)=user2;
//console.log(firstName,lastName);



///operador spread

let arr = [30,40,50];
//10,20
let newArr 
//


let persona={
    nombre:'Jorge',
    apellido:'Mosquera',
    estadoaCivil: 'casado',
    tieneHijos: true

};
//console.log(persona);

const newPerson ={
    ...persona,
    edad:31,
    email: 'nuevaera769@gmail.com'
}

console.log(newPerson);
const copyPerson={...persona}
//console.log(copyPerson);
persona.apellido='calero';
copyPerson.tieneHijos=true;
//console.log(persona,copyPerson,persona3,newPerson);

//rest
const foot =(param1,param2,param3,...rest)=>{
    //console.log(param1,param2,param,rest);
    
};
//fool('hola','mundo','blue','yellow',true,12,'green');

//coalescencies nula ??
const nombrePerson=persona.edad;
//console.log(nombrePerson);

//const defaultValue =edadPerson ??'default string' ;

//console.log(defaultValue);

//El operador de coalescencia nula(??)

let  ac = 5;
let  b = 10;

let max =(ac>b)&& ac || b;
console.log(false && 5);
console.log(false ||10 );
console.log(false || true);
console.log(false && true);


