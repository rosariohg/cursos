// this hace referencia a un objeto
//FORMA 1 de acceder a this
// class Persona{
// 	constructor(nombre,amigos = []){
// 		this.nombre = nombre
// 		this.amigos = amigos
// 	}
// 	listarAmigos(){
// 		const _this = this
// 		this.amigos.forEach(function(amigo){
// 			console.log(`hola, soy ${_this.nombre} y soy amiga de ${amigo}`)
// 		})
// 	}
// }

// // new 
// // 1. cre un objeto
// // 2. asigna el prototipo persona
// // 3. llama al constructor
// // 4. retorna lo del constructor

// const charis = new Persona("charito",["lucam", "pepito"])


// FORMA 2 de acceder a this, usadno bind
class Persona{
	constructor(nombre,amigos = []){
		this.nombre = nombre
		this.amigos = amigos
	}
	listarAmigos(){
		this.amigos.forEach(function(amigo){
			console.log(`hola, soy ${this.nombre} y soy amiga de ${amigo}`)
		}.bind(this))
	}
}

const charis = new Persona("charito",["lucam", "pepito"])

// FORMA 3 de acceder a this, usadno arrow function
class Persona{
	constructor(nombre,amigos = []){
		this.nombre = nombre
		this.amigos = amigos
	}
	listarAmigos(){
		this.amigos.forEach((amigo) => {
			console.log(`hola, soy ${this.nombre} y soy amiga de ${amigo}`)
		})
	}
}

const charis = new Persona("charito",["lucam", "pepito"])