let h = false;
let j = false;
let k = false;
let tata = "";
let price = 0;
let tata2 = "";
let price2 = 0;
let tata3 = "";
let price3 = 0;

function selecionar(clique){
    h = true;
    const x = document.querySelector(".options .selecionado");
    if (x !== null){
        x.classList.remove("selecionado");
    }
    clique.classList.add("selecionado");
    clique2();
    tata = clique.querySelector("p").innerHTML;
    price = Number(clique.querySelector(".opções p:nth-child(4)").innerHTML.replace(",",".").replace("R$ ",""));
}
function selecionar2(clique){
    j = true;
    const x = document.querySelector(".options2 .selecionado");
    if (x !== null){
        x.classList.remove("selecionado");
    }
    clique.classList.add("selecionado");
    const y = document.querySelector(".options2 .opções .js");
    y.classList.remove("escondido");
    clique2();
    tata2 = clique.querySelector("p").innerHTML;
    price2 = Number(clique.querySelector(".opções p:nth-child(4)").innerHTML.replace(",",".").replace("R$ ",""));
}
function selecionar3(clique){
    k = true;
    const x = document.querySelector(".options3 .selecionado");
    if (x !== null){
        x.classList.remove("selecionado");
    }
    clique.classList.add("selecionado");
    const y = document.querySelector(".options3 .opções .js");
    y.classList.remove("escondido");
    clique2();
    tata3 = clique.querySelector("p").innerHTML;
    price3 = Number(clique.querySelector(".opções p:nth-child(4)").innerHTML.replace(",",".").replace("R$ ",""));
    }

const escondido1 = document.querySelector(".escondido1");
const escondido2 = document.querySelector(".escondido2");
const escondido3 = document.querySelector(".escondido3");
const escondido4 = document.querySelector(".escondido4");
const escondido5 = document.querySelector(".escondido5");
const escondido6 = document.querySelector(".escondido6");
const escondido7 = document.querySelector(".escondido7");
const escondido8 = document.querySelector(".escondido8");
const escondido9 = document.querySelector(".escondido9");


    function selecionando(){
        if(escondido3 !== null){
            escondido3.classList.add("escondido3");
        }
        if(escondido2 !== null){
            escondido2.classList.add("escondido2");
        }
        escondido1.classList.remove("escondido1");
    }
    function selecionando2(){
        if(escondido1 !== null){
            escondido1.classList.add("escondido1");
        }
        if(escondido3 !== null){
            escondido3.classList.add("escondido3");
        }
        escondido2.classList.remove("escondido2");
    }
    function selecionando3(){
        if(escondido1 !== null){
            escondido1.classList.add("escondido1");
        }
        if(escondido2 !== null){
            escondido2.classList.add("escondido2");
        }
        escondido3.classList.remove("escondido3");
}

    function selecionando4(){
        if(escondido5 !== null){
            escondido5.classList.add("escondido5");
        }
        if(escondido6 !== null){
            escondido6.classList.add("escondido6");
        }
        escondido4.classList.remove("escondido4");
}
    function selecionando5(){
        if(escondido6 !== null){
            escondido6.classList.add("escondido6");
        }
        if(escondido4 !== null){
            escondido4.classList.add("escondido4");
        }
        escondido5.classList.remove("escondido5");
}
    function selecionando6(){
        if(escondido5 !== null){
            escondido5.classList.add("escondido5");
        }
        if(escondido4 !== null){
            escondido4.classList.add("escondido4");
        }
        escondido6.classList.remove("escondido6");
}
    function selecionando7(){
        if(escondido8 !== null){
            escondido8.classList.add("escondido8");
        }
        if(escondido9 !== null){
            escondido9.classList.add("escondido9");
        }
        escondido7.classList.remove("escondido7");
}
    function selecionando8(){
        if(escondido7 !== null){
            escondido7.classList.add("escondido7");
        }
        if(escondido9 !== null){
            escondido9.classList.add("escondido9");
        }
        escondido8.classList.remove("escondido8");
}
    function selecionando9(){
        if(escondido8 !== null){
            escondido8.classList.add("escondido8");
        }
        if(escondido7 !== null){
            escondido7.classList.add("escondido7");
        }
        escondido9.classList.remove("escondido9");
}

function clique2(){
if (h === true && k === true && j === true){
    const p = document.querySelector("footer button");
    const pp = document.querySelector("footer button p");
    p.removeAttribute("disabled");
    p.classList.add("esconde");
    pp.innerHTML="Fechar pedido";
    }
}
function zap(clique55){
    const link = "https://wa.me/5561999999999?text=";
    const link2 = encodeURIComponent
    (`Olá, gostaria de fazer o pedido:
- Prato: ${tata}
- Bebida: ${tata2}
- Sobremesa: ${tata3}
Total: ${((price*100+price2*100+price3*100)/100).toFixed(2)}`);
    console.log(clique55);
    const link3 = link+link2;
    clique55.setAttribute("href",link3);

}
