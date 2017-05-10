//sintaxis sugar
class Punto{
	constructor(x,y){
		this.x = x
		this.y = y
	}
	moverEnX(x){
		this.x += x
	}

	moverEnY(x){
		this.x += x
	}

	distancia(p){
		const x = this.x - p.x
		const y = this.y - p.y
		return Math.sqrt(x*x + y*y)
	}
}


const p1 = new Punto(0,4)
const p2 = new Punto (3,0)

console.log(p1.distancia(p2))