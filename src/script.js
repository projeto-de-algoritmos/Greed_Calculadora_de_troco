const form = document.querySelector(".form")
const input = document.querySelectorAll(".input")

form.addEventListener('submit', (event) => {
    event.preventDefault()
    
    let dinheiro = parseFloat(input[0].value)
    let preco = parseFloat(input[1].value)
    let moedaString = input[2].value

    moedaString = moedaString.replace(/\s/g, '')
    
    let moeda = []
    let num = ""
    
    for(let i = 0; i <= moedaString.length; i++) {
        if (moedaString[i] != ','){ 
            num += moedaString[i]
        }
        else if ( moedaString[i] == ',' || i-1 == moedaString.length ){
            let numI = parseFloat(num)
            moeda.push(numI)
            num = ""
        }
    }

    num = parseFloat(num)
    moeda.push(num)

    calculaMoedas(moeda, dinheiro-preco)
})


function calculaMoedas(moedas, valor) {
    moedas.sort((a, b) => {
        if (a > b) return -1
        if (a < b) return 1
        return 0
    })
    // console.log(moedas)

    let i =  0
    qtd = []
    
    while (valor >= moedas[moedas.length - 1]) {
        if (valor >= moedas[i]) {
            let div = parseInt(valor / moedas[i])
            valor -= moedas[i] * div
            qtd.push(div)
        }
        else {
            div = 0
            qtd.push(div)
        }
        i += 1
    }
    // console.log(qtd)

    exibe(qtd, moedas)
}

const result = document.querySelector('.result')

function exibe(qtd, moedas) {

    for (let i = 0; i < qtd.length; i++) {
        let element = document.createElement('p')
        element.textContent = `Quantidade de notas/moedas de R$${moedas[i]}: ${qtd[i]}`
        element.classList.add('qtdMoeda')
        result.appendChild(element)
    }

    for (let i = 0; i < moedas.length - qtd.length; i++) {
        let element = document.createElement('p')
        element.textContent = `Quantidade de notas/moedas de R$${moedas[moedas.length - i - 1]}: 0`
        element.classList.add('qtdMoeda')
        result.appendChild(element)
    }

    console.log(result)
}

const clear = document.querySelector('.clear')

clear.addEventListener('click', () => {
    input[0].value = ''
    input[1].value = ''
    input[2].value = ''

    const paragrafos = document.querySelectorAll('.qtdMoeda')
    for (let i = 0; i < paragrafos.length; i++) {
        paragrafos[i].parentNode.removeChild(paragrafos[i])
    }
    
})
