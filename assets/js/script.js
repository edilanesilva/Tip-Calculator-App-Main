const btn5 = document.querySelector('#btn5');
const btn10 = document.querySelector('#btn10');
const btn15 = document.querySelector('#btn15');
const btn25 = document.querySelector('#btn25');
const btn50 = document.querySelector('#btn50');
const btnCustom =  document.querySelector('#btn-custom')
const gorjetaPorPessoa = document.querySelector('#tip-amount');
const totalGorjetaPorPessoa = document.querySelector('#total-person');

function calculaGorjeta() {
	const conta = document.querySelector('#bill').value
	const numeroDePessoas = document.querySelector("#qtd-people").value
	
	if (conta == "" || numeroDePessoas == "") {
		alert('Por favor, digite todos os dados')
	}
}






