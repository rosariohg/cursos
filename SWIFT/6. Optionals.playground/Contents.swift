//: Playground - noun: a place where people can play

import UIKit

let numeroPosible = "234"
let numeroConvertido = Int(numeroPosible)
let posibleCadena : String?

if numeroConvertido != nil{
    let resultado = numeroConvertido! * 2
}

if let valorNumerico = Int(numeroPosible){
    let resultado = valorNumerico * 2
}
else{
    print ("Este valor no es numerico")
}

if let numero = Int("60"), let numero2 = Int("20"), numero < numero2{
    print("\(numero) < \(numero2)")
}
else{
    print ("La condicion no se cumple")
}