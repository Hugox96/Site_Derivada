//  Função para identificar os o tipo de função em relação ao input
 function identificarTipoFuncao(funcao) {
   if (funcao.includes('sin') || funcao.includes('cos') || funcao.includes('tan')) {
     console.log("ok")
     return 'trigonometrica';
  } else if (funcao.includes('x') || funcao.includes('x^')) {
    console.log("Oi")
    return 'polinomial';
  } else {
    return 'outro';
  }
}


function calcularDerivada() {
var funcao = document.getElementById("funcao").value;
if (funcao == ''){
   erro = document.getElementById('erro');
   erro.innerHTML = 'Valor Errado';
   erro.style.color = 'red';
   erro.style.fontSize = 'small';
}else{
  erro.innerHTML = '';
}
var derivada = math.derivative(funcao, 'x');
console.log(typeof derivada)

// Objeto tiposDeFunção para adicionar as descrições para cada função, como por exemplo, trigonométrica ou polinomial
const tiposDeFuncao = {
  trigonometrica: [
    { descricao: 'Passo 1: Essa é uma função trigonometrica', equacao: `f(x) = ${funcao}` },
    { descricao: 'Passo 2: Calculando a derivada com a regra da cadeia', equacao: `f'(x) = ${derivada.toString()}`},
    // { descricao: 'Passo 3: Simplificar ...' },
  ],
  polinomial: [
    { descricao: 'Passo 1: Identifique a função polinomial', equacao: `f(x) = ${funcao}` },
    { descricao: 'Passo 2: Aplicar a regra dos polinomios', equacao: `f\'(x) = ${derivada.toString()}`  },
  ],
};

// Aqui obtemos o tipo da função
var tipoFuncao = identificarTipoFuncao(funcao); 
const etapas = tiposDeFuncao[tipoFuncao]; // O objeto etapas recebe o tipo de função digitado no input
console.log(etapas);
adicionarEtapas(etapas)
} 

// Função para criar as descrições das etapas na div
function adicionarEtapas(etapas) {
  const etapasContainer = document.querySelector('.etapas');
  //  etapasContainer.innerHTML = '';

  // const etapas = tiposDeFuncao[tipoFuncao];
  //Cada loop é uma criação de um elemento na div, sendo o 1º a div, depois o paragrafo e o span
  etapas.forEach((passo) => {
    const passoDiv = document.createElement('div');
    passoDiv.classList.add('etapa');

    const descricao = document.createElement('p');
    console.log(descricao)
    descricao.textContent = passo.descricao;
    descricao.style.color="darkred"
    descricao.style.fontWeight="bold"
    passoDiv.appendChild(descricao);

    if (passo.equacao) {
      const equacao = document.createElement('span');
      equacao.textContent = passo.equacao;
      equacao.style.fontWeight = "bold"
      // Adicione o código LaTeX da equação entre os delimitadores de dólar (\$)
      equacao.innerHTML = `$$${passo.equacao}$$`;
      passoDiv.appendChild(equacao);
    }

 etapasContainer.appendChild(passoDiv)});
 MathJax.typesetPromise([etapasContainer])
 .catch((err) => console.log('Erro ao renderizar as equações:', err));

}

// function calcularDerivada() {
//   var funcao = document.getElementById("funcao").value;
//   // var resultado = document.getElementById("resultado");
//   console.log(funcao)

//   var derivada = math.derivative(funcao, 'x');
//   console.log(typeof derivada)

//   var etapas = [];
//   etapas.push({ descricao: 'Etapa 1: Substitua x por um valor específico', equacao: `f(1) = ${funcao}` });
//   etapas.push({ descricao: 'Etapa 2: Calcule a derivada', equacao: `f\'(x) = ${derivada.toString()}` });

//   // Adicione mais etapas conforme necessário

//   // Atualize o resultado final
//   // resultado.value = derivada.toString();

//   // Adicione as etapas à seção do passo a passo
//   adicionarEtapas(etapas);
// }

// // Função para adicionar as etapas do passo a passo na página
// function adicionarEtapas(etapas) {
//   const etapasContainer = document.querySelector('.etapas');
//   // etapasContainer.className = "etapasContainer";

//   etapas.forEach((etapa, index) => {
//     const etapaDiv = document.createElement('div');
//     etapaDiv.classList.add('etapa');

//     const descricao = document.createElement('p');
//     descricao.textContent = etapa.descricao;
//     descricao.style.color="blue"
//     descricao.style.fontWeight="bold"
//     etapaDiv.appendChild(descricao);

//     if (etapa.equacao) {
//       const equacao = document.createElement('span');
//       equacao.textContent = etapa.equacao;
//       etapaDiv.appendChild(equacao);
//     }
//     etapasContainer.style.marginTop="20px"
//     etapasContainer.appendChild(etapaDiv);
//   });
// }
