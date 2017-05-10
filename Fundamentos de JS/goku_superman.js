let vidaGoku = 100
let vidaSup = 100

const min_power = 5
const max_power = 12

const ambosSiganVivos =  () => vidaGoku > 0 && vidaSup > 0

const calcularGolpe = () => Math.round(Math.random() * (max_power - min_power) + min_power)

const GokuSigueVivo = () => vidaGoku > 0

let round = 0

while(ambosSiganVivos()){

	round ++

	console.log('round ${round}')
	const golpeGoku = calcularGolpe()
	const golpeSup = calcularGolpe()

	if (golpeGoku > golpeSup){
		console.log(`GOku ataca a supe con golpe de ${golpeGoku}`);
		vidaSup -= golpeGoku
		console.log(`superman queda en ${vidaSup} de vida`)
	}else{
		console.log(`sup ataca a goku con gole de ${golpeSup}`);
		vidaGoku -= golpeSup
		console.log(`goku queda en ${vidaGoku} de vida`)
	}
	
}

if (GokuSigueVivo()){
	console.log(`goku gano la pelea. su vida es de  ${vidaGoku}`);
} else {
	console.log(`sup gano la pelea. su vida es de  ${vidaSup}`);
}