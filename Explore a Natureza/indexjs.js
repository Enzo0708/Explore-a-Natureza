const imagens = document.querySelectorAll('.natureza-section li')
const textos = document.querySelectorAll('.js-conteudo section')

console.log(imagens)
console.log(textos)

function ativarConteudo(indice){
    textos.forEach((item) => {
        item.classList.remove('active')
    })
    textos[indice].classList.add('active')
}

imagens.forEach((item, index) =>{
    item.addEventListener('click', () => {
        ativarConteudo(index)
    })
})

////////////////////////////////////////////////

const faq = document.querySelectorAll('.js-faq dt')
const faq2 = document.querySelectorAll('.js-faq dd')

console.log(faq)
console.log(faq2)

function ativarConteudo(indice){
    faq2[indice].classList.toggle('active')
    faq[indice].classList.toggle('active')
}

faq.forEach((item, index) =>{
    item.addEventListener('click', () => {
        ativarConteudo(index)
    })
})