function tabuada() {
    var num = window.document.querySelector('input#txtnumero')
    var res = window.document.querySelector('div#res')
    var sel = window.document.querySelector('select#seltab')

    res.innerHTML = ""

    if (num.value.length == 0) {
        res.innerHTML = `Por favor, digite um número`
        sel.setAttribute('size',`${0}`)
        sel.innerHTML = ''
        sel.style.display = 'none'
    } else {
        let n = Number(num.value)
        let c = 1
        sel.innerHTML = ''
        while(c <= 10){
            sel.style.display = 'inline'
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`   
            item.value = `tab${c}`     
            sel.setAttribute('size',`${10}`)
            sel.appendChild(item)
            c++
        }
    }
}