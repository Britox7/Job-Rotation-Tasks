const faturamentoNoMes = {
  SP: "R$67.836,43",
  RJ: "R$36.678,66",
  MG: "R$29.229,88",
  ES: "R$27.165,48",
  Outros: "R$19.849,53",
};

const totalFaturamentoNoMes = Object.values(faturamentoNoMes).reduce(
  (total, value) => total + value
);

const percentuaisDeRepresentacao = {}; 
for (const estado in faturamentoNoMes) {
  const percentual =
      (faturamentoNoMes[estado] / totalFaturamentoNoMes) * 100;
  percentuaisDeRepresentacao[estado] = percentual.toFixed(2);
}

console.log("Percentual de representação por estado:");
for (const estado in percentuaisDeRepresentacao) {
  console.log(`${estado}: ${percentuaisDeRepresentacao[estado]}%`);
}