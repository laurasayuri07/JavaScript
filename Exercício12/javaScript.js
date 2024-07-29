var numeroTotal = parseFloat(prompt("Digite o número total:"));
var numeroPercentual = parseFloat(prompt("Digite o número percentual:"));
var resultadoPercentual = (numeroPercentual / numeroTotal) * 100;
console.log("Percentual calculado:", resultadoPercentual.toFixed(2) + "%");