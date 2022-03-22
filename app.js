let conta = 0

const botoes = document.querySelectorAll('.btn')

botoes.forEach(botao => {
    botao.addEventListener('click', b => {
        const classes = b.currentTarget.classList

        if(classes.contains('diminuir')) conta--
        else if(classes.contains('resetar')) conta = 0
        else conta++

        if(conta < 0) value.style.color = 'red'
        else if(conta == 0) value.style.color = 'black'
        else value.style.color = 'green'

        value.textContent = conta
    })
})