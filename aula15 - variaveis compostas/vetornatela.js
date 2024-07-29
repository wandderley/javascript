let num = [5, 8, 2, 9, 3]

num[5] = 1 //adiciona na posição especificada

console.log(`O vetor tem ${num.length} posições`)

/*for
for(let i=0; i < num.length; i++){
    console.log(`${i+1}º elemento no vetor: ${num[i]}`)
}
*/

//for in
for(let i in num) {
    console.log(`O elemento na posição ${i} tem o valor de ${num[i]}`)
}

// para buscar valor no vetor - indexOf()
let valor = 8

if (num.indexOf(valor) == -1) {
    console.log(`o valor ${valor} não foi encontrado`)
} else {
    console.log(`o valor ${valor} está na posição ${num.indexOf(valor)} `)
}
