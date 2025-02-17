
let amigos = []; // Variável array 

function adicionarAmigo() {
    //  Guarda o nome digitado e seleciona pelo ID 
    let inputAmigo = document.getElementById('amigo');
    
    // Verifica se o campo não está vazio
    let nome = inputAmigo.value.trim();
    if (!nome) {
        alert('Por favor, insira um nome.');
        return; 
    }

    //  Adicionar ao array
    amigos.push(nome);
    
    //  Mostra o novo nome inserido na tela
    let listaAmigos = document.getElementById('listaAmigos');
    let novoItem = document.createElement('li');
    novoItem.textContent = nome;
    listaAmigos.appendChild(novoItem); 

    //  Limpa o campo
    inputAmigo.value = '';
}



function atualizarListaAmigos() {
    //  Obter elemento da lista
    let listaAmigos = document.getElementById('listaAmigos');
    
    //  Limpa o nome anterior
    listaAmigos.innerHTML = "";
    
    //  Percorrer array e criar elementos
    for(indice = 0; indice < amigos.length; indice++) {
        
        //  Criar novo item de lista
        const li = document.createElement('li');
        li.textContent = amigos[indice];
        
        //  Adicionar à lista
        listaAmigos.appendChild(li);
    }
}


function sortearAmigo() {
    //  Validar se há amigos cadastrados
    if (amigos.length === 0) {
        alert('Adicione amigos antes de sortear!');
        return;
    }

    // Gerar índice aleatório
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    
    //  Obter nome sorteado
    let amigoSecreto = amigos[indiceSorteado];
    
    //  Exibir resultado
    let elementoResultado = document.getElementById('resultado');
    
    // Cria novo item de lista com animação
    let novoResultado = document.createElement('li');
    novoResultado.textContent = amigoSecreto;
    novoResultado.classList.add('aparecer'); // Cria uma classe Css
    
    elementoResultado.appendChild(novoResultado);
}