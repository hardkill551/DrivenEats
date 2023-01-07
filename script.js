let h = false;
let j = false;
let k = false;
let comida = "";
let price = 0;
let comida2 = "";
let price2 = 0;
let comida3 = "";
let price3 = 0;
const price4 = ".opções p:nth-child(4)";
function selecionar(clique){
    h = true;
    const x = document.querySelector(".options .selecionado");
    if (x !== null){
        x.classList.remove("selecionado");
    }
    clique.classList.add("selecionado");
    clique2();
    comida = clique.querySelector("p").innerHTML;
    price = Number(clique.querySelector(price4).innerHTML.replace(",",".").replace("R$ ",""));
    clique2();
}
function selecionar2(clique){
    j = true;
    const x = document.querySelector(".options2 .selecionado");
    if (x !== null){
        x.classList.remove("selecionado");
    }
    clique.classList.add("selecionado");
    const y = document.querySelector(".options2 .opções .js");
    comida2 = clique.querySelector("p").innerHTML;
    price2 = Number(clique.querySelector(price4).innerHTML.replace(",",".").replace("R$ ",""));
    clique2();
}
function selecionar3(clique){
    k = true;
    const x = document.querySelector(".options3 .selecionado");
    if (x !== null){
        x.classList.remove("selecionado");
    }
    clique.classList.add("selecionado");
    const y = document.querySelector(".options3 .opções .js");
    comida3 = clique.querySelector("p").innerHTML;
    price3 = Number(clique.querySelector(price4).innerHTML.replace(",",".").replace("R$ ",""));
    clique2();
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
    const link2 = encodeURIComponent(`Olá, gostaria de fazer o pedido:
- Prato: ${comida}
- Bebida: ${comida2}
- Sobremesa: ${comida3}
Total: R$ ${(price+price2+price3).toFixed(2)}`);
    console.log(clique55);
    const link3 = link+link2;
    clique55.setAttribute("href",link3);
}
