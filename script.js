function calcularDerivada() {
	var funcao = document.getElementById("funcao").value;
	var resultado = document.getElementById("resultado");
	
	var derivada = math.derivative(funcao, 'x').toString();
	
	resultado.value = derivada;
}