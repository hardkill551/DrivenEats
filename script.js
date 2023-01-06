let h = false;
let j = false;
let k = false;

function selecionar(clique){
    h = true
    const x = document.querySelector(".options .selecionado")
    if (x !== null){
        x.classList.remove("selecionado")
    }
    clique.classList.add("selecionado")
    if (h === true && k === true && j === true){
        const x = document.querySelector("footer div")
        const y = document.querySelector("footer div p")
        x.classList.add("esconde")
        y.innerHTML="Fechar pedido"
        }
}
function selecionar2(clique){
    j = true
    const x = document.querySelector(".options2 .selecionado")
    if (x !== null){
        x.classList.remove("selecionado")
    }
    clique.classList.add("selecionado")
    const y = document.querySelector(".options2 .opções .js")
    y.classList.remove("escondido")
    if (h === true && k === true && j === true){
        const x = document.querySelector("footer div")
        const y = document.querySelector("footer div p")
        x.classList.add("esconde")
        y.innerHTML="Fechar pedido"
        }
    }
function selecionar3(clique){
    k = true
    const x = document.querySelector(".options3 .selecionado")
    if (x !== null){
        x.classList.remove("selecionado")
    }
    clique.classList.add("selecionado")
    const y = document.querySelector(".options3 .opções .js")
    y.classList.remove("escondido")
    if (h === true && k === true && j === true){
        const x = document.querySelector("footer div")
        const y = document.querySelector("footer div p")
        x.classList.add("esconde")
        y.innerHTML="Fechar pedido"
        }
    }

const escondido1 = document.querySelector(".escondido1")
const escondido2 = document.querySelector(".escondido2")
const escondido3 = document.querySelector(".escondido3")
const escondido4 = document.querySelector(".escondido4")
const escondido5 = document.querySelector(".escondido5")
const escondido6 = document.querySelector(".escondido6")
const escondido7 = document.querySelector(".escondido7")
const escondido8 = document.querySelector(".escondido8")
const escondido9 = document.querySelector(".escondido9")


    function selecionando(){
        if(escondido3 !== null){
            escondido3.classList.add("escondido3")
        }
        if(escondido2 !== null){
            escondido2.classList.add("escondido2")
        }
        escondido1.classList.remove("escondido1")
    }
    function selecionando2(){
        if(escondido1 !== null){
            escondido1.classList.add("escondido1")
        }
        if(escondido3 !== null){
            escondido3.classList.add("escondido3")
        }
        escondido2.classList.remove("escondido2")
    }
    function selecionando3(){
        if(escondido1 !== null){
            escondido1.classList.add("escondido1")
        }
        if(escondido2 !== null){
            escondido2.classList.add("escondido2")
        }
        escondido3.classList.remove("escondido3")
}

    function selecionando4(){
        if(escondido5 !== null){
            escondido5.classList.add("escondido5")
        }
        if(escondido6 !== null){
            escondido6.classList.add("escondido6")
        }
        escondido4.classList.remove("escondido4")
}
    function selecionando5(){
        if(escondido6 !== null){
            escondido6.classList.add("escondido6")
        }
        if(escondido4 !== null){
            escondido4.classList.add("escondido4")
        }
        escondido5.classList.remove("escondido5")
}
    function selecionando6(){
        if(escondido5 !== null){
            escondido5.classList.add("escondido5")
        }
        if(escondido4 !== null){
            escondido4.classList.add("escondido4")
        }
        escondido6.classList.remove("escondido6")
}
    function selecionando7(){
        if(escondido8 !== null){
            escondido8.classList.add("escondido8")
        }
        if(escondido9 !== null){
            escondido9.classList.add("escondido9")
        }
        escondido7.classList.remove("escondido7")
}
    function selecionando8(){
        if(escondido7 !== null){
            escondido7.classList.add("escondido7")
        }
        if(escondido9 !== null){
            escondido9.classList.add("escondido9")
        }
        escondido8.classList.remove("escondido8")
        
}
    function selecionando9(){
        if(escondido8 !== null){
            escondido8.classList.add("escondido8")
        }
        if(escondido7 !== null){
            escondido7.classList.add("escondido7")
        }
        escondido9.classList.remove("escondido9")
        
        
}
