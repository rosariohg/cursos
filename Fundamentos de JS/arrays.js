//operador de desarmar sprate operator

function suma(...numbers){
	// console.log(numbers)
	// let acum = 0
	// for (let i=0;i<numbers.length ;i++){
	// 	acum += numbers[i]
	// }

//arrays metodos reduce recibe una funcion 
//y en segundo lugar el valor inicial del acumulador
	
	/// FORMA 1

	// const resultado = numbers.reduce(function (acum,numero){
	// 	acum+=numero
	// 	return acum
	// },0)
	// return resultado


	// FORMA 2
	return numbers.reduce(function(acum,numero){
		acum+=numero
		return acum
	},0)

}

function dobles(...numeros){
	const resultado = []
	for(let i=0;i < numeros.length;i++){
		resultado.push(numeros[i]*2)
	}
	return resultado

	numeros.map(funcion (numero){
		return numero*2
	})

}

suma(4,8,12)