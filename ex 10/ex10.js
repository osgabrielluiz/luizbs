let bot = document.getElementById('bt')

bot.addEventListener('click', verific)

function verific(){
   
    let valor = document.getElementById('num').value

    let rr = document.getElementById('resultado')

    valor = Number(valor)

    if( valor > 60){
    
         rr.appendChild(document.createTextNode('Você foi multado!'))
    
    }

    else if( valor == ''){
        alert('Por favor, informe um valor!')
    }

    else if( valor < 0){

        alert('Valor informado invalido!')

    }

    else if( valor < 60){
    
        rr.appendChild(document.createTextNode('Sem problemas, continue seu trageto'))
   
    }




}