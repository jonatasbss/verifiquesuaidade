let data = new Date()
let ano = data.getFullYear()
let fano = document.getElementById('txtano')
let res = document.querySelector('#res')

function verificar() {

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        /* Realiza o cálculo com ano atual com o ano digitado */
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')

        /* Cria no DOM um elemeno img para adicionar a foto */
        img.setAttribute('id', 'foto')

        /* Verfica qual elemento está marcado */
        if (fsex[0].checked) {

            /* Após verificação qual elemento está marcado ele retorna o seu genero */
            genero = 'Homem'

            /* Faz a verificação da idade de acordo como ano digitado e retorna a imagem semelhante a idade */
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/homem_crianca.png')
            } else if (idade < 25) {
                img.setAttribute('src', 'img/homem_jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/homem_adulto.png')
            } else {
                img.setAttribute('src', 'img/homem_idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/mulher_crianca.png')
            } else if (idade < 25) {
                img.setAttribute('src', 'img/mulher_jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/mulher_adulta.png')
            } else {
                img.setAttribute('src', 'img/mulher_idosa.png')
            }
        }
        res.style.textAlign = 'center'
        /* Trás o resultado do genero e do cálculo da idade */
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        /* Adiciona a foto de acordo com genero e o cálculo da idade */
        res.appendChild(img)

    }

}
