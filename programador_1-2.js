// Junção

const programador = {
    nome: 'Luciano Barreto',
    idade: 40,
    tecnologias: [
      { nome: 'JavaScript', especialidade: 'Front-end Web Development' },
      { nome: 'Java', especialidade: 'Desktop' }
    ]
  };
  
  console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}.`);
  