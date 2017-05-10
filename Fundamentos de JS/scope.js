//conjunto de variables a la cual podemos acceder
// closure puede acceder a las variables
// scope es el entorno donde fueron creadas es donde fue definicida y la palabra
// con la que fue definida, var, let ..
// var esta en el scope de la función 
// HOISTING las variables creadas, JS la declara en el scope
// const variable que no variará
// let 


// var nombre = "charito"

function saludar(nombre){
	//VAR
	// if (true) {
	// 	var nombre = "uskita"
	// }
	// console.log(`hola ${nombre}`)
	const nombre = "charito"
	for (var i=0;i<10;i++)
		console.log(`hola ${nombre}`)
}

saludar("uskita")
// console.log(`la variable nombre tiene ${nombre}`)