// console.log("Hello World")

// CAMEL CASE : fullName, secondName -> digunakan untuk memberikan nama pada variabel
// PASCAL CASE : getUserName, getData -> digunakan untuk memberikan nama pada function

// --- COMPARE VAR, LET, AND CONST ---

// 1. Var
// Problem #1 : Reassign
var alphabet = "abcd"
var alphabet = "defgh"
// console.log(alphabet)

// Problem #2 : Hoisting
number = 15
var number;
// console.log(number)

// Problem #3 : Scope
var randomNumber = 10
if(true){
    var randomNumber = 15
}
// console.log(randomNumber)

// 2. Let
// Problem #1 : Reassign
// let fruit = "mango"
// let fruit = "pineapple"
// console.log(fruit) // --> SyntaxError: Identifier 'fruit' has already been declared

// Problem #2 : Hoisting
// numberY = 10
// let numberY;
// console.log(numberY)

// Problem #3 : Scope
// let numberX = 12
// if(true){
//     let numberX = 20
// }
// console.log(numberX)

// 3. Const
// Problem #1 : Reassign
// const key = 123
// key = 456
// console.log(key) // --> TypeError: Assignment to constant variable.

// Problem #2 : Hoisting
// numVar = 789
// const numVar;
// console.log(numVar) // --> SyntaxError: Missing initializer in const declaration

// Problem #3 : Scope
// const numberX = 20
// if(true){
//     const numberX = 18
// }
// console.log(numberX)

// --- TIPE DATA PRIMITIVE ---
let strVar = "Hello World" // string
let intVar = 1234567 // number
let undefined; // undefined
let booleanVar = true // boolean
let nullVar = null // null

// untuk cek type data, bisa pakai typeof
// console.log("tipe data dari strVar : ", typeof strVar)
// console.log("tipe data dari intVar : ", typeof intVar)
// console.log("tipe data dari booleanVar : ", typeof booleanVar)
// console.log("tipe data dari undefined : ", typeof undefined)
// console.log("tipe data dari nullVar : ", typeof nullVar)

// --- REASSIGNMENT, ==, ===

// = -> reassignment (mendeklarasikan nilai pada suat variabel)
// == -> membandingkan antara kedua valuenya saja
// === -> membandingkan antara kedua value, sekaligus dengan tipe datanya

const temp = 20
const conditionOne = temp == "20"
const conditionTwo = temp === "20"
const conditionThree = temp != "20"
const conditionFour = temp !== "20"

// GERBANG LOGIKA AND (&&)

// false + false = false
// false + true = false
// true + false = false
// true + true = true

// GERBANG LOGIKA OR (||)

// false + false = false
// false + true = true
// true + false = true
// true + true = true

// console.log(conditionOne && conditionTwo)
// console.log(conditionTwo && conditionThree)
// console.log(conditionOne && conditionFour)

// console.log(conditionOne || conditionTwo)
// console.log(conditionTwo || conditionThree)
// console.log(conditionOne || conditionFour)