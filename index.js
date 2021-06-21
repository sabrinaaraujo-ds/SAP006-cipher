import cipher from './cipher.js';

const msg = document.getElementById('input-message')
const key = document.getElementById('key')
const result = document.getElementById('output-message')

const btnEncode = document.getElementById('encode-btn')
const btnDecode = document.getElementById('decode-btn')

//funcao  com novos parametros, inseridos pelo usuario. Retorna a funcao ENCODE que encripta a mensagem
function getValuesEncode(){    
    let string = msg.value    
    let offset = parseInt(key.value) 
    return result.value = cipher.encode(offset, string)   
}

function getValuesDecode(){
    let string = msg.value
    let offset = parseInt(key.value)     
    return result.value = cipher.decode(offset, string)
}

btnEncode.addEventListener('click', getValuesEncode)
btnDecode.addEventListener('click', getValuesDecode)

//console.log(cipher);