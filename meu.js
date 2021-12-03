document.getElementById('jogar').addEventListener('click', comecar)
import {color} from "./color.js";

function comecar () {
    var coresCSS = color()
    var cores = []
    var corSelecionada = ''
    var promptUsuario = ''
    var tentativas = 3

    while (cores.length != 10) {
        cores.push(coresCSS[Math.floor((Math.random() * coresCSS.length) + 1)].toLowerCase())
        cores = [...new Set(cores)] 
        cores.sort() 
    }
    corSelecionada = cores[Math.floor((Math.random() * cores.length) + 1)] 

    cores = cores.join(', ') 

    while (tentativas != 0) {   
        promptUsuario = prompt(`Eu estou pensando em uma dessas cores:\n\n"${cores.toString()}"\n\nQual cor eu estou pensando?\n\nVidas: ${tentativas}`).toLowerCase()

        if (promptUsuario.length === 0 || !promptUsuario.trim()) { 
            alert('Por favor, digite uma cor!!')
        } 
        else if (!cores.includes(promptUsuario)) { 
            alert('Essa cor não está entre as 10 possiveis ou não existe!\n\nTente novamente')
        } 
        else if (promptUsuario != corSelecionada) { 
            dicas(corSelecionada, promptUsuario, tentativas)
            tentativas--
        } 
        else if (promptUsuario == corSelecionada){
            alert('Você Ganhou!!')
            tentativas = 0
        }
    }

    function dicas(x,y,v) { 
        if (x.charCodeAt(0) > y.charCodeAt(0)) {
            if (v == 1) {
                alert(`Você perdeu! \n\nA correta era:\n${x}`)
                alert()
            } else {
                alert('Resposta Errada\n\nDica é\n Sua cor é alfabéticamente menor que a minha\n\nTente novamente!')
            }
        } else {
            alert('Resposta Errada\n\nDica é Sua cor é alfabéticamente maior que a minha\n\nTente novamente!')
        }
    }
}

