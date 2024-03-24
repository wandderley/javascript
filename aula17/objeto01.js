var amigo = {nome: 'José',
sexo: 'M',
peso: 85.4,
engorgar(p=0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engorgar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)