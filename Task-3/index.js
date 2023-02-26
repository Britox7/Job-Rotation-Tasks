fetch("./informations.json")
    .then((call) => call.json())
    .then((res) => {
        const faturamentoDiario = res.map((item) => item.valor);

        const menorFaturamento = Math.min(...faturamentoDiario);
        console.log(`Menor faturamento diário: ${menorFaturamento}`);

        const maiorFaturamento = Math.max(...faturamentoDiario);
        console.log(`Maior faturamento diário: ${maiorFaturamento}`);

        const mediaMensal =
            faturamentoDiario.reduce((total, value) => total + value) /
            faturamentoDiario.length;

        let diasAcimaDaMedia = 0;
        for (let i = 0; i < faturamentoDiario.length; i++) {
            if (faturamentoDiario[i] > mediaMensal) {
                diasAcimaDaMedia++;
            }
        }
        console.log(
            `Dias com faturamento diário acima da média mensal: ${diasAcimaDaMedia}`
        );
    })
    .catch((error) => console.error(error));