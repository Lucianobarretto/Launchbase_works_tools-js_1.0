// Cálculo de IMC

const nome = 'Luciano';
const peso = 90;
const altura = 1.76;

const imc = peso / (altura * altura);

if (imc >= 30) {
    console.log(`Luciano, seu IMC é: ${imc}, você está acima do peso!`);
} else{
    console.log(`Luciano, seu IMC é: ${imc}, você não está acima do peso.`);
}
