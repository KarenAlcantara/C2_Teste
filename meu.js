document.getElementById('butao').addEventListener('click', comecar)
import {color} from "./colors.js";

function comecar () {
    var coresCSS = color()
    var cores = []
    var corSelecionada = ''
    var promptUsuario = ''
    var tentativas = 3
    var res = document.querySelector('p#res')

    while (cores.length != 10) { //sortea 10 valores e adiciona no vetor
        cores.push(coresCSS[Math.floor((Math.random() * coresCSS.length) + 1)].toLowerCase())
        cores = [...new Set(cores)] //remove valores duplicados
        cores.sort() //ordena o vetor em ordem alfabética
    }
    corSelecionada = cores[Math.floor((Math.random() * cores.length) + 1)] //adiciona uma cor aleatoria na variavel

    cores = cores.join(', ') //adiciona espaço entre os valores no vetor

    while (tentativas != 0) {   
        promptUsuario = prompt(`Eu estou pensando em uma dessas cores:\n\n"${corSelecionada.toString()}"\n\nQual cor eu estou pensando?\n\nVidas: ${tentativas}`).toLowerCase()

        if (promptUsuario.length === 0 || !promptUsuario.trim()) { //verifica se o usuário não digitou a cor
            alert('Por favor, digite uma cor!!')
        } 
        else if (!corSelecionada.includes(promptUsuario)) { //verificar se a cor existe 
            alert('Essa cor não está entre as 10 possiveis ou não existe!\n\nTente novamente')
        } 
        else if (promptUsuario != corSelecionada) { //verifica se o usuário acertou o valor ou não
            compararString(corSelecionada, promptUsuario, tentativas)
            tentativas--
        } 
        else if (promptUsuario == corSelecionada){
            alert('Parabéns, você acertou!!')
            document.body.style.backgroundColor = promptUsuario //muda a cor de fundo para a cor acertada
            res.innerHTML = 'Obrigado por jogar!!!'
            tentativas = 0
        }
    }

    function compararString(x,y,v) { //verificar a possição da cor esclhida para usuário para dar a dica
        if (x.charCodeAt(0) > y.charCodeAt(0)) {
            if (v == 1) {
                alert(`Desculpe, mas suas vidas acabaram!\n\nA correta era: "${x}"\n\nObrigado por jogar!!!`)
                res.innerHTML = 'Atualize a página ou dê um F5 para jogar novamente.'
            } else {
                alert('Você errou!!\n\nDica: Sua cor é alfabéticamente menor que a minha\n\nPor favor, tente novamente!')
            }
        } else {
            alert('Você errou!!\n\nDica: Sua cor é alfabéticamente maior que a minha\n\nPor favor, tente novamente!')
        }
    }
}

