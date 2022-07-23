const form = document.querySelector(".form")
const input = document.querySelectorAll(".input")

form.addEventListener('submit', (event) => {
    event.preventDefault()
    
    let dinheiro = parseFloat(input[0].value)
    let preco = parseFloat(input[1].value)
    let moedaString = input[2].value

    // moedaString = moedaString.replace(/\s/g, '')
    
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
    
}