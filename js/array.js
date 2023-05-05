let frutas = ["banana", "maça", "laranja", "morango", "uva", "abacaxi"]

console.log(frutas)
console.log(frutas[0])
console.log(` o tamanho do array ${frutas.length}`)

// inserindo item ao final do array
frutas.push("pêssego");

// removendo o ultimo item do array
frutas.pop();

// removendo item no inicio
frutas.shift();

frutas.indexOf("maça");

frutas.forEach(frutas => {
    console.log("fruta da vez" + frutas)
});


// concatencao de arrays

let nr1 = [1,2,3,4,5];
let nr2 = [6,7,8,9,10];

let nr3 = [...nr1, ...nr2];

nr3.forEach(nr => {
    console.log(nr)
})
