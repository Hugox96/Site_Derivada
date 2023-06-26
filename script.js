// function calcularDerivada() {
// 	var funcao = document.getElementById("funcao").value;
// 	var resultado = document.getElementById("resultado");
	
// 	var derivada = math.derivative(funcao, 'x').toString();
	
// 	resultado.value = derivada;
// }

function calcularDerivada() {
  var funcao = document.getElementById("funcao").value;
  var resultado = document.getElementById("resultado");
  console.log(funcao)

  var derivada = math.derivative(funcao, 'x');
  console.log(typeof derivada)

  var etapas = [];
  etapas.push({ descricao: 'Etapa 1: Substitua x por um valor específico', equacao: `f(1) = ${funcao}` });
  etapas.push({ descricao: 'Etapa 2: Calcule a derivada', equacao: `f\'(x) = ${derivada.toString()}` });

  // Adicione mais etapas conforme necessário

  // Atualize o resultado final
  resultado.value = derivada.toString();

  // Adicione as etapas à seção do passo a passo
  adicionarEtapas(etapas);
}

// Função para adicionar as etapas do passo a passo na página
function adicionarEtapas(etapas) {
  const etapasContainer = document.querySelector('.etapas');

  etapas.forEach((etapa, index) => {
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
