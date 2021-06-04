import cipher from './cipher.js';

const msg = document.getElementById('input-message')
const key = document.getElementById('key')
var result = document.getElementById('output-message')
const btnEncode = document.getElementById('btn-encode')

function getValues(){
    let string = msg.value
    let offset = parseInt(key.value)    

    return result.value = cipher.encode(offset, string) 
}

btnEncode.addEventListener('click', getValues )

//console.log(cipher);