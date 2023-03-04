const conta = document.querySelector('#bill');
const numeroDePessoas = document.querySelector("#qtd-people");
const gorjetaPorPessoa = document.querySelector('#tip-amount');
const totalGorjetaPorPessoa = document.querySelector('#total-person');
const btnTips = document.querySelectorAll("#buttons-container button ");
const btnReset = document.querySelector('#btn-reset');
const btnCustom = document.querySelector('#btn-custom');
const msgAlert = document.querySelector('#text-alert')



btnTips.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		const valueTip = e.target.innerText
		const conta = document.querySelector('#bill').value
		const numeroDePessoas = document.querySelector("#qtd-people").value 
		
		
		if (conta !== "" && numeroDePessoas !== "" && valueTip == '5%') {

			let valorGorjetaPessoa = (conta * 5 / 100) / numeroDePessoas
			let totalGorjetaPessoa = (conta / numeroDePessoas) + valorGorjetaPessoa
			
			gorjetaPorPessoa.innerHTML = `\$ ${valorGorjetaPessoa.toFixed(2)}`
			totalGorjetaPorPessoa.innerHTML =`$ ${totalGorjetaPessoa.toFixed(2)}`
					
		}
		else if (conta !== "" && numeroDePessoas !== "" && valueTip == '10%') {
			valorGorjetaPessoa = (conta * 10 / 100) / numeroDePessoas
			totalGorjetaPessoa = (conta / numeroDePessoas) + valorGorjetaPessoa
			
			gorjetaPorPessoa.innerHTML = `\$ ${valorGorjetaPessoa.toFixed(2)}`
			totalGorjetaPorPessoa.innerHTML =`$ ${totalGorjetaPessoa.toFixed(2)}`

		}
		else if (conta !== "" && numeroDePessoas !== "" && valueTip == '15%') {
			valorGorjetaPessoa = (conta * 15 / 100) / numeroDePessoas
			totalGorjetaPessoa = (conta / numeroDePessoas) + valorGorjetaPessoa
			
			gorjetaPorPessoa.innerHTML = `\$ ${valorGorjetaPessoa.toFixed(2)}`
			totalGorjetaPorPessoa.innerHTML =`\$ ${totalGorjetaPessoa.toFixed(2)}`

		}
		else if (conta !== "" && numeroDePessoas !== "" && valueTip == '25%') {
			valorGorjetaPessoa = (conta * 25 / 100) / numeroDePessoas
			totalGorjetaPessoa = (conta / numeroDePessoas) + valorGorjetaPessoa
			
			gorjetaPorPessoa.innerHTML = `\$ ${valorGorjetaPessoa.toFixed(2)}`
			totalGorjetaPorPessoa.innerHTML =`\$ ${totalGorjetaPessoa.toFixed(2)}`

		}
		else if (conta !== "" && numeroDePessoas !== "" && valueTip == '50%') {
			valorGorjetaPessoa = (conta * 50 / 100) / numeroDePessoas
			totalGorjetaPessoa = (conta / numeroDePessoas) + valorGorjetaPessoa
			
			gorjetaPorPessoa.innerHTML = `\$ ${valorGorjetaPessoa.toFixed(2)}`
			totalGorjetaPorPessoa.innerHTML =`\$ ${totalGorjetaPessoa.toFixed(2)}`

		}
		else {
			msgAlert.style.display='block'
		}
	})
})

/* tip personalizado */
btnCustom.addEventListener('click', () => {
	const conta = document.querySelector('#bill').value;
	const numeroDePessoas = document.querySelector("#qtd-people").value;

	 if (conta !== "" && numeroDePessoas !== "" ) {

		valorGorjetaPessoa = (conta / 100) * btnCustom.value / numeroDePessoas
		totalGorjetaPessoa = (conta / numeroDePessoas) + valorGorjetaPessoa
		gorjetaPorPessoa.innerHTML = `\$ ${valorGorjetaPessoa.toFixed(2)}`
		totalGorjetaPorPessoa.innerHTML = `\$ ${totalGorjetaPessoa.toFixed(2)}`
	}

	else {
		msgAlert.style.display='block'
	} 
	
})

/* reset */

btnReset.addEventListener('click', () => {
	conta.value = ''
	numeroDePessoas.value = ''
	gorjetaPorPessoa.innerHTML = '$ 0.00'
	totalGorjetaPorPessoa.innerHTML = '$ 0.00'
	btnCustom.value = ""
	msgAlert.style.display='none'

})



