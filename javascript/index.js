function area(base,altura){
  return base * altura / 2;
}

console.log('El area ${base} y ${altura} es: ${area(base,altura)}');

let area = (base,altura) => base * altura / 2


const edad = 13

const namCharito = 'Charito'
const edadCharito = 25

const namePita = 'Pita'
const edadPita = 12

function canSW(nombre,edad){
  if(this.edad >= edad){
    alert('${nombre} puede pasar');
  }else {
    alert('${nombre} no puede pasar');
  }
}