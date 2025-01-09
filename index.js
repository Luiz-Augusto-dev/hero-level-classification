let nome = "Deda";
let xp = 2500;

if (xp < 10) {
    console.log("O Herói de nome " + nome + " está no nível de Recruta");
} else if (xp >= 10 && xp < 30) {
    console.log("O Herói de nome " + nome + " está no nível de Iniciante");
} else if (xp >= 30 && xp < 80) {
    console.log("O Herói de nome " + nome + " está no nível de Aprendiz");
} else if (xp >= 80 && xp < 200) {
    console.log("O Herói de nome " + nome + " está no nível de Assistente");
} else if (xp >= 200 && xp < 350) {
    console.log("O Herói de nome " + nome + " está no nível de Discípulo");
} else if (xp >= 350 && xp < 600) {
    console.log("O Herói de nome " + nome + " está no nível de Especialista");
} else if (xp >= 600 && xp < 1000) {
    console.log("O Herói de nome " + nome + " está no nível de Experiente");
} else if (xp >= 1000 && xp < 1500) {
    console.log("O Herói de nome " + nome + " está no nível de Elite");
} else if (xp >= 1500 && xp < 2200) {
    console.log("O Herói de nome " + nome + " está no nível de Veterano");
} else {
    console.log("O Herói de nome " + nome + " está no nível de Quinto-Assassino");
}
