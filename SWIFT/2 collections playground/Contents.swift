//: Playground - noun: a place where people can play

import UIKit

var enteros = [Int]()
var otrosEnteros : Array<Int> = []

enteros.append(5)
enteros = []

var muchosEnteros = Array(repeating:0.5, count:5)
var nombres = ["Ana", "Juan","Pedro"]
nombres.count
nombres.isEmpty
//nombres = []
//nombres.isEmpty

nombres[1]
nombres.append("Lilia")
nombres.insert("Alvaro", at: 2)
nombres += ["Adriana"]

nombres[0] = "Anita"
nombres.remove(at: 2)
nombres.removeLast()

var todosNombres = ""

for (index,nombre) in nombres.enumerated(){
    todosNombres.append("\(index)\(nombre) ")
}

todosNombres



