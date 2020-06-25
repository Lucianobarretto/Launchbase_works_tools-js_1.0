// Cálculo de aposentadoria

const nome = 'Raul';
const sexo = 'M';
const idade = 60;
const contribuicao = 25;

const soma = idade + contribuicao;

const homemAposenta = sexo == 'M' && contribuicao >= 35 && soma >= 95
const mulherAposenta = sexo == 'F' && contribuicao >= 30 && soma >= 85

if (homemAposenta || mulherAposenta) {
  console.log(`${nome}, você pode se aposentar!`)
} else {
  console.log(`${nome}, você ainda não pode se aposentar!`)
}
