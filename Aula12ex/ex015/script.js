let msg = document.getElementById('msg')
let diasem = document.getElementById('diasem')
let img = document.getElementById('imagem')
let data = new Date()
let hora = data.getHours()

function carregar() {
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = 'img/manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'img/tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'img/noite.png'
        document.body.style.background = '#515154'
    }

}