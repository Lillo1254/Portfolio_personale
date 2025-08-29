let benvenuto = localStorage.getItem("nome");

if (benvenuto) {
    alert("Bentornata/o " + benvenuto.toUpperCase() + " il local storage si svuota ogni 10 minuti con un set interval di 600000ms");
} else {
    benvenuto = prompt("Inserisci il tuo nome");
    localStorage.setItem("nome", benvenuto);
}
const clearef = setInterval(() => {
    localStorage.clear();
    console.log("LocalStorage cancellato!");
}, 600000);

let title = document.querySelector('#title')

if (benvenuto) {
    title.innerText = "Piacere di conoscerti " + benvenuto + " !";
    } else if (benvenuto === null) {
    title.innerText = "Piacere di conoscerti";
}

const color = document.querySelector('#title');

setInterval(() => {
    color.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
}, 1500)

let fine = document.querySelector("#fine");
if (benvenuto) {
    fine.innerText = "P.s. Gentile " + benvenuto + " cliccando sull \' immagine del progetto verra reindirizzato alla pagina github con la struttura del codice. Grazie per la visita !";
}

let modale = document.querySelector(".modale");
let chiudi = document.querySelector("#chiudi");
let cert = document.querySelector("#cert");


if(window.innerWidth > 800){
    
    cert.addEventListener("click", () => {
        modale.classList.add("visibile"); 
    });
    
    
    chiudi.addEventListener("click", (e) => {
        e.stopPropagation();
        modale.classList.remove("visibile"); 
    });
}