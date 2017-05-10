// es un método que nos retorna otra funcion con el 
// contexto cambiado

class Toggable{
	constructor(element){
		//inciar estado int
		this.element = element
		this.element.innerHTML = 'Off'
		this.activated = false
		this.element.addEventListener('click', this.onClick.bind(this))
	}
	onClick(ev){
		//cambiar estado interno
		this.activated = !this.activated
		this.togleText()
		// llamar TogleText
	}
	ToggleText(){
		//cambiar texto
		this.element.innerHTML = this.activated ? 'ON' : 'OFF'
	t
}

const button = document.getElementById('boton')
const miBoton = new Toggable(button)