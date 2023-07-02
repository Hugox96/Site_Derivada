// Função para identificar os o tipo de função em relação ao input
function identificarTipoFuncao(funcao) {
  // Aqui você pode implementar a lógica para identificar o tipo de função
  // Exemplo simplificado considerando apenas as funções trigonométricas e polinomiais
  if (funcao.includes('sin') || funcao.includes('cos') || funcao.includes('tan')) {
    return 'trigonometrica';
  } else if (funcao.includes('x^')) {
    return 'polinomial';
  } else {
    return 'outro';
  }
}

// Objeto tiposDeFunção para adicionar as descrições para cada função
const tiposDeFuncao = {
  trigonometrica: [
    { descricao: 'Passo 1: Identifique a função trigonométrica', equacao: 'f(x) = ...' },
    { descricao: 'Passo 2: Aplicar a regra de ...' },
    { descricao: 'Passo 3: Simplificar ...' },
    // Adicione mais passos conforme necessário
  ],
  polinomial: [
    { descricao: 'Passo 1: Identifique a função polinomial', equacao: 'f(x) = ...' },
    { descricao: 'Passo 2: Aplicar a regra de ...' },
    { descricao: 'Passo 3: Simplificar ...' },
    // Adicione mais passos conforme necessário
  ],
  // Adicione mais tipos de função e seus passos correspondentes
};

function calcularDerivada() {
var funcao = document.getElementById("funcao").value;
//  var resultado = document.getElementById("resultado");
//  console.log(funcao)

var derivada = math.derivative(funcao, 'x');
console.log(typeof derivada)

var tipoFuncao = identificarTipoFuncao(funcao);
adicionarPassosTipoFuncao(tipoFuncao);
}

function adicionarPassosTipoFuncao(tipoFuncao) {
  const etapasContainer = document.querySelector('.etapas');
  etapasContainer.innerHTML = '';

  const etapas = tiposDeFuncao[tipoFuncao];
  etapas.forEach((etapa) => {
    const etapaDiv = document.createElement('div');
    etapaDiv.classList.add('etapa');

    const descricao = document.createElement('p');
    descricao.textContent = etapa.descricao;
    etapaDiv.appendChild(descricao);

    if (etapa.equacao) {
      const equacao = document.createElement('span');
      equacao.textContent = etapa.equacao;
      etapaDiv.appendChild(equacao);
    }

    etapasContainer.appendChild(etapaDiv);
  });
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
