let textoDoUsuario = prompt("Insira um texto");     // A) Pede para o usuário inserir um texto e a armazena na variavel textoDoUsuario

const outraFuncao = function(texto) {               // A) Armazena a function dentro da variavel outraFuncao
	return texto.toLowerCase().includes("cenoura")  // A) toLowerCase Trasfoma todas letras em minusculas e includes Procura se a palavra no caso "cenoura" foi digitada pelo usuário
}

const resposta = outraFuncao(textoDoUsuario) // A) Armazena todos dados  da variavel outraFuncao
console.log(resposta)                        // A) Imprime no console os dados armazenados na variavel Resposta  B) 1- true 2- true 3- true pois contem a palavra cenoura