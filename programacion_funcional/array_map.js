const suma = (ns) =>{
    let acumulado = 0;
    for (i=0; i<ns.length;i++){
        acumulado+=ns[i];
    }
    return acumulado 
}

const numeros = [1,2,3,4,5];

//multiplicar * 2
const multiplicados = numeros.map(x => x * 2)
console.log('Multiplicados')
console.log(multiplicados)

//a pares
const parejas = numeros.map(x => [x,x])
console.log('Parejas')
console.log(parejas)


const mascotas = [
    {nombre: 'Beto', edad:12, raza:'perro'},
    {nombre: 'El Chancho', edad:10, raza:'breton'},
    {nombre: 'Tuco', edad:8, raza:'gato comun europeo'},
    {nombre: 'Mona', edad:1, raza:'perro'},
    
];

//Edad promedio
//Crea array con las edades de mascotas
const edades = mascotas.map(x => x.edad)
const resultado = suma(edades)
console.log('Edad promedio de los animales')
console.log(resultado/edades.length)
