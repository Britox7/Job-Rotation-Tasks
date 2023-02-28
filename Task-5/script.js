let word = "Job-Rotation";
let invertedWord = "";

for (let indice = word.length - 1; indice >= 0; indice--) {
  invertedWord += word[indice];
}

console.log("Palavra usada: " + word + "\n"
 + "Palavra da forma invertida: " + invertedWord )