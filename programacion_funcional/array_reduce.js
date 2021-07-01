//funcion reducer
//const reducer = (acumulador, valorActual) => nuevoAcumulador

//const reducido = [1,2].reduce((acc, el) => acc + el,0)
//console.log(reducido)

const numeros = [1,2,3,4,5]
const resultado = numeros.reduce((acc,el) => acc + el,0)

console.log(resultado)

const mascotas = [
    {nombre: 'Beto', edad:12, raza:'perro'},
    {nombre: 'El Chancho', edad:10, raza:'breton'},
    {nombre: 'Tuco', edad:8, raza:'gato comun europeo'},
    {nombre: 'Mona', edad:1, raza:'perro'},
    
];

const indexed = mascotas.reduce((acc,el)=>({
    ...acc,
    [el.nombre]: el,    
}), {})

console.log(indexed['Tuco'])

const anidado = [1,[2,3],4,[5]]
//Quiero como resultado [1,2,3,4,5]

const plano = anidado.reduce((acc, el) => acc.concat(el),[])

console.log(plano)
