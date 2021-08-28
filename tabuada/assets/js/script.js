function calcular() {
  let numeroInput = document.getElementById('#numero').value
  let resultado = document.querySelector('.resultado')
  let multi = 1

  if (numeroInput == 0) {
    resultado.classList.add('resultado-invalido')
    resultado.innerHTML = '<h1>Inválido!</h1><p>informe um número válido!</p>'
  } else {
    let numero = Number(numeroInput)
    resultado.innerHTML = `<h1>Tabuada do ${numero}</h1>`
    for (multi = 1; multi < 11; multi ++) {
      resultado.classList.remove('resultado-invalido')
      resultado.innerHTML += `<p> ${numero} X ${multi} = ${numero * multi} </p>`
    }
  }

  console.log(typeof numeroInput)
}

addEventListener('keyup', function (e) {
  e.preventDefault()
  if (e.keyCode === 13) {
    calcular()
  }
})