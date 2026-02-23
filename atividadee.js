//Crie um array cores com três cores e mostre a segunda cor.
let cores = ["Roxo", "Rosa", "Azul"];
console.log(cores[1]);

//Crie um array numeros com cinco números e mostre o primeiro e o último.
let numeros = [1,2,3,4,5];
console.log(numeros[0]);
console.log(numeros[4]);


//Crie um array frutas com duas frutas e adicione uma terceira.
let frutas = ["Abacaxi", "laranja"];
frutas.push("manga");
console.table(frutas);

//Crie um array nomes com quatro nomes e remova o último.
let nomes = ["Luiza", "Paulo", "Carina", "JP"];
nomes.pop();
console.table(nomes);

//Crie um array times e mostre quantos itens ele possui.
let times = ["Atlético Mineiro" ,"Atlético Mineiro", "Corinthians", "Cruzeiro"]
console.log (times.length);

//Crie um array animais e percorra mostrando todos no console.
let animais = ["Onça", "Leão ", "Papagaio"];
console.table(animais);

//Crie um array carros e altere o segundo item.
let carros = ["Fiat","Hyundai","Chevrolet","Hyundai"];
carros[1] = ("Toyota");
console.table(carros);

//Crie um array linguagens e verifique se contém "JavaScript".
let linguagens = ["Python", "JavaScript", "C#", "Java"];
let contemJavaScript = linguagens.includes("JavaScript");
console.log(contemJavaScript);

//Crie um array valores e mostre a soma de todos os números.
let numerosSoma = [10, 20, 30, 40, 50];
let soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log("A soma é:", soma); 

//Crie um array vazio tarefas, adicione três tarefas e exiba numeradas.
let tarefas = [];
tarefas.push("Estudar JavaScript");
tarefas.push("Fazer exercícios");
tarefas.push("Ler um livro");
console.log(tarefas);

