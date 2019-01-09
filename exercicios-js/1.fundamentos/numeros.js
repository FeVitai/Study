const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //isInteger server parar saber se a variavel é integer ou não
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //usamos toFixed (numero) para definir a quantidade de casas decimais que ira aparecer console
console.log(media.toString(2)) //toString exibe o valor em String / Se adicionar "2" o valor será exibido em binário
console.log(typeof media)
console.log(typeof Number)