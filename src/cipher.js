

const cipher = {

    encode(offset, string) {

        var resultado = '';
    
         for (let i = 0; i < string.length; i++){
    
            var letraAtual = string[i];
            var ascCode = string.charCodeAt(i);     
                   
            //verificando letras maiúsculas  
            if(ascCode >= 65 && ascCode <= 90){
                letraAtual = String.fromCharCode((ascCode - 65 + offset) % 26 + 65)
            }
            //verificando letras minúsculas 
            else if (ascCode >= 97 && ascCode <= 122){
                letraAtual = String.fromCharCode((ascCode - 97 + offset) % 26 + 97)
            }
    
            //alimentando resultado
            resultado += letraAtual
        }
    
        return resultado;
    }

    
};

//console.log(cipher.encode(1,"Casa"))

export default cipher;
