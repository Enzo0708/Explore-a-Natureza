export default function faqJs(){
    const faq = document.querySelectorAll('.js-faq dt')
    const faq2 = document.querySelectorAll('.js-faq dd')

    console.log(faq)
    console.log(faq2)

    function ativarConteudo2(indice){
        faq2[indice].classList.toggle('active')
        faq[indice].classList.toggle('active')
    }

    faq.forEach((item, index) =>{
        item.addEventListener('click', () => {
            ativarConteudo2(index)
        })
    })
}