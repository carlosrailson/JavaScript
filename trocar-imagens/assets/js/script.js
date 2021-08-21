const camisa = document.querySelector('.camisa')
const title = document.querySelector('.title')
const tamanhos = document.querySelector('.resultado')

function camisaBranca() {
  camisa.src = "./assets/img/camisabranca.jpg"
  title.innerHTML ='<h1> Camiseta Mockup cor Branca</h1> <p>A camiseta Branca Mockup é feita de lã natural e costurada com linho fino da índia, a estampa é produzida de forma artesanal e colada manualmente. A cor branca é excelente para uso casual.</p> '
  tamanhos.innerHTML = ' '
}

function camisaPreta() {
  camisa.src = "./assets/img/camisapreta.jpg"
  title.innerHTML ='<h1> Camiseta Mockup cor Preta</h1> <p> A camiseta Preta Mockup é feita para quem gosta de se divertir. Produzida com ceda preta dos altos montes da capadocia, te proporciona muito conforto. É ótima para para usar no trabalho e em casa. </p>'
  tamanhos.innerHTML = ' '
}

function p() {
  tamanhos.innerHTML = '<p>Cumprimento: 55cm</p><p>Ombros: 45cm</p><p>Largura: 40cm</p>'
}

function m() {
  tamanhos.innerHTML = '<p>Cumprimento: 65cm</p><p>Ombros: 55cm</p><p>Largura: 50cm</p>'
}

function g() {
  tamanhos.innerHTML = '<p>Cumprimento: 75cm</p><p>Ombros: 65cm</p><p>Largura: 60cm</p>'
}