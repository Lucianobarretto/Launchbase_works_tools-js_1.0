// Calcular receitas

const usuarios = [
    {
      nome: "Ana Paula",
      receitas: [110.2, 39.6, 95.3, 18.6],
      despesas: [16.8, 89.6, 12.6],
    },
    {
      nome: "Liria",
      receitas: [35.6, 125.3, 45.6],
      despesas: [15.6, 110.9, 378.0],
    },
    {
      nome: "Raul",
      receitas: [6.8, 125.9, 350.6, 489.0],
      despesas: [356.9, 256.3],
    },
  ];
  
  function calculaSaldo(receitas, despesas) {
    const resto = (somaNumeros(receitas) - somaNumeros(despesas))
  
    return resto;
}
  
for (let i = 0; i < usuarios.length; i++){
    const receita = usuarios[i].receitas.reduce((acc,cur) => {
        return acc + cur
    })
    const despesa = usuarios[i].despesas.reduce((acc, cur) => {
        return acc + cur
    })
    const total = receita - despesa
    if (total > 0) {
        console.log(`O usuário ${usuarios[i].nome} possui saldo POSITIVO de ${total.toFixed(2)}`)
    } else {
        console.log(`O usuário ${usuarios[i].nome} possui saldo NEGATIVO de ${total.toFixed(2)}`)
    }
}