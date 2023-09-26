export default function imagensTextos(){
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
}