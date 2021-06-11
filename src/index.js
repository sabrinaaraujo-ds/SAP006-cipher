import cipher from './cipher.js';

const msg = document.getElementById('input-message')
const key = document.getElementById('key')
var result = document.getElementById('output-message')

const btnEncode = document.getElementById('encode-btn')
const btnDecode = document.getElementById('decode-btn')

//funcao  com novos parametros, inseridos pelo usuario. Retorna a funcao ENCODE que encripta a mensagem
function getValuesEncode(){
    //mensagem
    let string = msg.value
    //offset
    let offset = parseInt(key.value)    

    //console.log(string)
    //console.log(typeof offset)
    
    return result.value = cipher.encode(offset, string)   
}

function getValuesDecode(){
    let string = msg.value
    let offset = parseInt(key.value)
        
    return result.value = cipher.decode(offset, string)
}

//dois paramentros: evento e callback Function?
//quando o botao e clicado, chama a funcao que tem os valores do usuario e tbm o resultado.

//acao para ENCRIPTAR os valores passados pelo usuario
btnEncode.addEventListener('click', getValuesEncode)

//acao para DECRIPTAR os valores passados pelo usuario
btnDecode.addEventListener('click', getValuesDecode)

//console.log(cipher);