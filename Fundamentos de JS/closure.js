//CLOSURE
// outer function
function saludarFamilia(apellido){
	// inner function
	return function saludarMiembroFamilia(nombre){
		console.log(`Hola ${nombre} - ${apellido}`)
	}
}

const saludarGomez = saludarFamilia("Gomez")
const saludarPerez = saludarFamilia("Perez")

saludarGomez("Rosario")

saludarPerez("Pepito")


//ejemplo

function prefijoRe(nombre){
	return function makePrefijo(prefijo){
		console.log(`${nombre}${prefijo}`)
	}
}
const prefijo = prefijoRe("re")

prefijo("bueno")
