let amigos = [];


function adicionarAmigo(nome){

    nome = document.querySelector("input").value;

    if(nome == ""){

        alert("Por favor, insira um nome.");

    }else{

        amigos.push(nome);
        limparCampo();
    }

    let lista = document.getElementById("resultado");

    lista.innerHTML = "";
    let itens = "";

    amigos.forEach(nome => {
        
     itens += `<ul>${nome}</ul>`;

    });
    
lista.innerHTML = itens;


}

function limparCampo(){
    nome = document.querySelector("input");
    nome.value = "";
}

function sortearAmigo(){

    let quantidadeAmigos = amigos.length;
    let numeroSorteado = parseInt(Math.random() * quantidadeAmigos);
    let amigoEscolhido = document.getElementById("resultado");

    amigoEscolhido.innerHTML = amigos[numeroSorteado];//

}