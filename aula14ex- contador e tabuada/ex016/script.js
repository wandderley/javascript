function contar() {    
    var inicio = window.document.querySelector('input#txtinicio')
    var fim = document.querySelector('input#txtfim')
    var passo = document.querySelector('input#txtpasso')
    var res = document.querySelector(`div#res`)

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.lengh == 0) {
        res.innerHTML = `Preencha todos os campos`
    } else {
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        res.innerHTML = `Contando: <br>`
        
        // VALIDAÇÃO DO PASSO
        if (p != 0) {
            //CONTAGEN CRESCENTE
            if(i < f){
                for(var contador = i; contador <= f; contador += p) {
                    res.innerHTML += `${contador} \u{1F449} `
                }              
            } else { // CONTAGEM DECRESCENTE
                    
                for (let contador = i; contador >= f; contador -= p) {
                    res.innerHTML += `${contador} \u{1F449} `       
                }     
            }   
            res.innerHTML += `\u{1F3C1}`
        }else{
            res.innerHTML = `Digite um valor maior que 0 para o passo`
        }
             
        
    }    
}