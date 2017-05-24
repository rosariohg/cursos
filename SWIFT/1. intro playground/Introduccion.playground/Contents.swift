//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"
let str2 = " platzi"

var str3 = " al curso de swift"
str + str2 + str3
//str = str.appending(str2)
//str = str.appending(str3)

str += str2

str.characters.count
str.characters.first
str.characters.last

var newString : String
newString = "Hola mundo"

let constanteEntero = 5
var variableEntero : Int
variableEntero = constanteEntero * constanteEntero
variableEntero += constanteEntero + constanteEntero

"El resultado final es \(variableEntero)"

let pi = 3.1415
variableEntero = variableEntero + Int(pi)
var resultadoDecimal = pi + Double(variableEntero)


let error404 = (404, "Not Found")
error404.0

let (errorCode, statusMessage) = error404
errorCode
statusMessage

let error400 = (statusCode : 400, statusMessage : "Internal error")
error400.statusCode

