const gorjetaPorPessoa = document.querySelector('#tip-amount');
const totalGorjetaPorPessoa = document.querySelector('#total-person');
const btnTips = document.querySelectorAll("#buttons-container button ");
const btnReset= document.querySelector('#btn-reset')



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
			alert('preencha todos os campos')
		}
	})
})

function tipPersonalizado() {
	const btnCustom = document.querySelector('input');
	const conta = document.querySelector('#bill').value
	const numeroDePessoas = document.querySelector("#qtd-people").value
		

	if (conta !== "" && numeroDePessoas !== "" && btnCustom !== "") {

		valorGorjetaPessoa = (btnCustom.value / 100) *conta / numeroDePessoas
		totalGorjetaPessoa = (conta / numeroDePessoas) + valorGorjetaPessoa
		gorjetaPorPessoa.innerHTML = `\$ ${valorGorjetaPessoa.toFixed(2)}`
		totalGorjetaPorPessoa.innerHTML = `\$ ${totalGorjetaPessoa.toFixed(2)}`
		
				
	}

	else {
		alert('preencha todos os campos')
	}
}

btnCustom.addEventListener('click', () => {
	tipPersonalizado()
})





