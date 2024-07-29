let num = [5, 8, 2, 9, 3]

num[5] = 1 //adiciona na posição especificada
num.push(4) // adiciona na ultima posição

console.log(`Nosso vetor é o ${num}`)
num.sort() //organiza o vetor por ordem crscente
console.log(`Nosso vetor em ordem crescente é ${num}`)
console.log(`O elemento da primeira posição é ${num[0]}`)
console.log(`O vetor tem ${num.length} posições`)

for(var i=0; i < num.length; i++){
    console.log(`${i+1}º elemento no vetor: ${num[i]}`)
}