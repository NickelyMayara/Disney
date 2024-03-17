const imgs = document.getElementById("img")
const img = document.querySelectorAll("#img img") // para pegar o img dentro do id img

let idx = 0

function carrossel() {
   idx++

   if (idx > img.length - 1) {
      idx = 0
   }

   imgs.style.transform = `translateX(${-idx * 600}px)`
}

setInterval(carrossel, 3000)

const imgs2 = document.getElementById("img2")
const img2 = document.querySelectorAll("#img2 img") // para pegar o img dentro do id img

let idx2 = 0

function carrossel2() {
   idx2++

   if (idx2 > img2.length - 1) {
      idx2 = 0
   }

   imgs2.style.transform = `translateX(${-idx2 * 600}px)`
}

setInterval(carrossel2, 3000)

//MODAL DE CADASTRO

const getElement = (...queries) => document.querySelector(...queries)

const botao = getElement('.abrirModal')
const container = getElement('.modalContainer')
const modal = getElement('.modal')

const ativarModalClass = 'modalShow'

const openModal = () => container.classList.add(ativarModalClass)
const closeModal = () => container.classList.remove(ativarModalClass)

botao.addEventListener('click', openModal)
container.addEventListener('click', (event) => {
   if (modal.contains(event.target)) return //target: propriedade que indica qual elemento foi clicado // Essa função é para não fechar quando clicar no modal

   closeModal()
})