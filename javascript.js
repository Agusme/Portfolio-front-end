function rehacer(){
    document.getElementById("edit-info").style.display="block";
    let txt= document.getElementById(text-info).innerText;
    console.log(txt);
}
function myFunction (plata){
    document.getElementById("text-info").innerText=plata;
    console.log(plata);
}

function cargarMsj(cargamsj){
    console.log(cargamsj + "<br>");
}
let nuevaInfo=document.getElementById("edit-info")
nuevaInfo.addEventListener('keyup', (t) =>
{
    logMessage ('Key "${t.key}" released [event: keyup]');
    if (t.key=="Enter"){
        document.getElementById("edit-info").style.display="none"
    }
});



function cambiar_parrafo(){
    document.getElementById ("edit-acercade").style.display="block";
    let texto= document.getElementById("text-acercade").innerText;
    console.log(texto);

};
function myFunction2 (valor){
    document.getElementById("text-acercade").innerText= valor;
};
function logMessage(message){
    console.log(message + "<br>");
}
let textarea=document.getElementById("edit-acercade")
textarea.addEventListener('keyup', (e) =>
{
    logMessage ('Key "${e.key}" released [event: keyup]');
    if (e.key=="Enter"){
        document.getElementById("edit-acercade").style.display="none"
    }
});


function editar_parrafo(){
    document.getElementById ("edit-psp").style.display="block";
    let text= document.getElementById("text-psp").innerText;
    console.log(text);

}

function funcionpsp(val){
    document.getElementById("text-psp").innerText= val;
};
function mensaj(msj){
    console.log(mensaj+ "<br>");
}
let textopsp= document.getElementById("edit-psp")
textopsp.addEventListener('keyup', (o) =>
{
    mensaj('Key "${o.key}" released [event: keyup]');
    if (o.key=="Enter"){
        document.getElementById("edit-psp").style.display="none"
    }
}

);




function cambiar(){
    document.getElementById("edit-conin").style.display="block";
    let escrito = document.getElementById("text-conin").innerText
    console.log(escrito);
};
function funcionconin(va){
    document.getElementById("text-conin").innerText=va;

};
function men(m){
    console.log(men+ "<br>");
}

let loEscrito = document.getElementById ("edit-conin")
loEscrito.addEventListener('keyup', (i) =>
{
    men('Key "${i.key}" released [event: keyup]');
    if (i.key=="Enter"){
        document.getElementById("edit-conin").style.display="none"
    }
}
);


function editar(){
    document.getElementById("edit-bmz").style.display="block";
    let escri = document.getElementById ("text-bmz").innerText
     console.log(escri);
};

function funcionBmz(lor){
    document.getElementById("text-bmz").innerText=lor;
}

function msjlog (mj){
    console.log(msjlog + "<br>");

};
let escritonuevo = document.getElementById("edit-bmz")
escritonuevo.addEventListener('keyup', (a) =>
{
    msjlog('Key "${a.key}" released [event: keyup]');
    if (a.key=="Enter"){
        document.getElementById("edit-bmz").style.display="none"
    }
}
);

function cambio(){
    document.getElementById("edit-decro").style.display="block";
    let letras = document.getElementById("text-decro").innerText
    console.log(letras);
};

function funciondecro(v){
    document.getElementById("text-decro").innerText=v;
};

function mensajelog(mensaje){
    console.log(mensajelog + "<br>");
};


let loNuevo = document.getElementById("edit-decro")
loNuevo.addEventListener('keyup', (u) =>
{
    mensajelog('Key "${u.key}" released [event: keyup]');
    if (u.key=="Enter"){
        document.getElementById("edit-decro").style.display="none"
    }
}
);

function cambiarcol(){
    document.getElementById("edit-col").style.display="block";
    let info = document.getElementById("text-col").innerText
    console.log(info);
};
function funcioncol(l){
    document.getElementById("text-col").innerText=l;
};
function msjcol(mcol){
    console.log(msjcol + "<br>");
};
let coleNuevo = document.getElementById("edit-col")
coleNuevo.addEventListener('keyup', (f) =>
{
    msjcol('Key "${f.key}" released [event: keyup]');
    if (f.key=="Enter"){
        document.getElementById("edit-col").style.display="none"
    }
}
);


function eliminar (){
   let eliminado= document.getElementById("text-acercade").remove(this)
    console.log(eliminado);
}


