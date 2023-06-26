// function calcularDerivada() {
// 	var funcao = document.getElementById("funcao").value;
// 	var resultado = document.getElementById("resultado");
	
// 	var derivada = math.derivative(funcao, 'x').toString();
	
// 	resultado.value = derivada;
// }

function calcularDerivada() {
  var funcao = document.getElementById("funcao").value;
  var resultado = document.getElementById("resultado");

  var derivada = math.derivative(funcao, 'x');

  var etapas = [];
  etapas.push({ descricao: 'Etapa 1: Substitua x por um valor específico', equacao: `f(x) = ${funcao}`, valor: 2 });
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

    if (etapa.valor) {
      const valor = document.createElement('span');
      valor.textContent = `x = ${etapa.valor}`;
      etapaDiv.appendChild(valor);
    }

    if (etapa.resultado) {
      const resultado = document.createElement('span');
      resultado.textContent = `Resultado: ${etapa.resultado}`;
      etapaDiv.appendChild(resultado);
    }

    etapasContainer.appendChild(etapaDiv);
  });
}
