var i, aba, matrizA = [];
var i, aba, matrizB = [];
var mA = document.getElementById("mA");
var mA = document.getElementById("mA");

for (i = 0; i < 4; i++) {
	aba = parseInt(prompt("Escreva os 4 números da PRIMEIRA matriz: "));
	matrizA.push(aba);
	console.group(matrizA[i]);
	mA.innerHTML += "<li>" + matrizA[i] + "</li>";
}
for (i = 0; i < 4; i++) {
	aba = parseInt(prompt("Agora, escreva os 4 números da SEGUNDA matriz: "));
	matrizB.push(aba);
	console.group(matrizB[i]);
	mB.innerHTML += "<li>" + matrizB[i] + "</li>";
}
var soma = [];
for (i = 0; i < 4; i++) {
	var resposta = Number.parseFloat(matrizA[i]) + Number.parseFloat(matrizB[i]);
	soma.push(resposta);
	console.group(soma[i]);
	s.innerHTML += "<li>" + soma[i] + "</li>";
};

