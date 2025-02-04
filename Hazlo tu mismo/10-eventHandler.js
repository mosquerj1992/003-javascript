let img = document.querySelector('img');
console.log(img);

//onclik
img.onclick = function(){
    img.src='./img/moto01.jpg'
}
//onmouseover
img.onmouseover = ()=>{
    img.src='./img/moto02.jpg'
}
//onmouseout
img.onmouseout = ()=>{
    img.src='./img/moto03.jpg'
}

const myCustmoEvent =()=>{
    obj.style.brackground='green';
}

//onblur
//onfocus
//onkeydown
//onload



