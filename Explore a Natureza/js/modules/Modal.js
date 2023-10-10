const form = document.querySelector('.js-modal')
const login = document.querySelector('.js-list #login')
const dados = {}

function pegarValor(event){
    dados[event.target.name] = event.target.value
    confirm.log(dados)
}

form.addEventListener('change', pegarValor)
form.addEventListener('submit', (event) => {
    event.preventDefault()
    localStorage.setItem(dados.email, JSON.stringify(dados))
    alert("Dados salvos com sucesso")
})