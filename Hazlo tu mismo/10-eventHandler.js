let img = document.querySelector('img');
//console.log(img);

//onclik
img.onclick = function () {
    img.src = './img/moto01.jpg'
}
//onmouseover
img.onmouseover = () => {
    img.src = './img/moto02.jpg'
}
//onmouseout
img.onmouseout = () => {
    img.src = './img/moto03.jpg'
}

const myCustmoEvent = () => {
    alert("Estoy Imprimiendo  mi evento  customizado");
}


const myOnFocus = (obj) => {
    obj.style.brackground = 'yellows';
}

const myOnBlur = (obj) => {
    obj.style.brackground = 'orange';
}

const createButtons = (number, color) => {
    for (let i = 0; i < number; i++) {
        const div = document.createElement('div');
        div.style.backgroundColor = color;
        div.style.height = "30px";
        div.style.margin = "3px";
        div.style.width = "30px";
        div.style.cssFloat = "left";
        div.style.cursor = "pointer";
        div.draggable = "true";
        div.onclick = function () {
            alert('you clicked on a box #' + i);
        };
        document.getElementsByTagName('section')[0].appendChild(div)

    }
}


//onblur
//onfocus
//onkeydown
//onload



