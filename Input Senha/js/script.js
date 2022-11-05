
const tela = document.querySelector('.tela')
const keys = tela.querySelector('.keys')
let display = document.querySelector('.display')
display.textContent = (' ')
keys.addEventListener('click', e => {
     if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    if (!action) {
        console.log(display.textContent.length)
        if(display.textContent.length<5) {
            console.log('numero')
            if (displayedNum === '0') {
                display.textContent = keyContent
            }else {
                display.textContent = displayedNum + keyContent
            }
        }else{
            alert("Quantidade de digitos alcançada")

        }   
    }
    if (action === 'apagar') {
        display.textContent = (' ')
        console.log('key apagar!')
    }
    
    if (action === 'enviar') {
        let senha = display.textContent
        display.textContent = (' ')
        console.log('key enviar!')
        console.log(senha)
    }
      
    }
})
