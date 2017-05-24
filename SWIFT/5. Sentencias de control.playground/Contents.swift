//: Playground - noun: a place where people can play

import UIKit

var numero = 5
let operando = 3
let total = 18

if numero * operando == total{
    numero = 0
}
else{
    numero = 1
}

for i in 1...5{

    i
}

for i in 1..<5{
    i
}
var totalSum = 0

for _ in 1...5{
    totalSum += 5
}

var resultado = 0
for i in 1...5{

    resultado  = resultado + (i * i)
}

var counter = 0
while counter < 50 {
    counter += counter + 2
}

counter = 0
repeat{
    counter+=1
}
while counter < 50

let edad = 35
switch edad {
case 12..<18:
    print("Es adolescente")
case 18..<40:
    print("Es adulto")
default:
    print("Es muy viejo")
}

let coordenada = (2,1)
switch coordenada {
case (0,0):
    print("Coordenada esta en el origen")
case (0, _):
    print("Coordena esta sobre eje x")
case (_, 0):
    print("Coordena esta sobre eje y")
case (-2...2,-2...2):
    print("Coordenada esta dentro de un cadrante")
default:
    print("Coordenada esta en otro lugar")
}

let animal = "Rinoceronte"
switch animal {
case "Perro":
    print("🐶")
case "Gato":
    print("🐱")
default:
    print("Este animal no tiene emoji")
}

