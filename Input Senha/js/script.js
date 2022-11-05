
const tela = document.querySelector('.tela')
const keys = tela.querySelector('.keys')
let display = document.querySelector('.display')
display.innerText = (' ')
keys.addEventListener('click', e => {
     if (display.innerText === 'Salvo'){
        display.innerText = (' ')}
     if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.innerText
    const displayedNum = display.innerText
    
    
        if (!action) {
            console.log(display.innerText.length)
            if(display.innerText.length<7) {
                console.log('numero')
                if (displayedNum === '0') {
                    display.innerText = keyContent
                }else {
                    display.innerText = displayedNum + keyContent
                }
            }else{
                alert("Quantidade de digitos alcançada")

            }   
        }
        if (action === 'apagar') {
            display.innerText = display.innerText.slice(0, -1)
            console.log('key apagar!')
        }
        
        if (action === 'enviar') {
            let senha = display.innerText
            display.innerText = ('Salvo')
            console.log('key enviar!')
            console.log('Sua senha foi salva como:'+senha)
        }
      
        }
         
})
