// --- penamaan function harus menggunakan camel case

// --- FUNCTION ---

function sumNumber(){
    const numberX = 15;
    const numberY = 30;
    return numberX + numberY
}

// return -> untuk mengembalikan nilai dari dalam function agar bisa diakses dari luar

// console.log(sumNumber())
// console.log(sumNumber() + 10)

// menggunakan parameter dalam function
// parameter -> untuk membuat nilai di dalam function menjadi dinamis
// contoh parameter -> numberA, numberB
// contoh argumen -> 5,8
// argumen yang dimasukkan harus disesuaikan dengan parameternya

function sumWithParams(numberA, numberB){
    const result = numberA + numberB
    return result
}

// console.log(sumWithParams(5, 8))
// console.log(sumWithParams(9, 8))

// --- IF ---

function checkTemperature(temp){
    if(temp >= 37){
        console.log("suhu badan sedang dalam kondisi demam")
    }
    if(temp >= 30){
        console.log("suhu badan sedang dalam kondisi normal")
    }
    if(temp <= 29){
        console.log("suhu badan sedang dalam kondisi dingin")
    }
}

// checkTemperature(36)
// checkTemperature(28)

// --- IF ELSE ---
// --- jika persyaratan if pertama tidak dipenuhi, maka akan langsung dilempar ke else

function checkNumber(number){
    if(number % 2 === 0){
        return "bilangan genap"
    } else {
        return "bilangan ganjil"
    }
}

// console.log(checkNumber(21))
// console.log(checkNumber(30))

// --- ELSE IF ---
// --- jika persyaratan if pertama tidak dipenuhi, maka akan langsung dilempar ke else-if
// --- kalo else-if juga tidak terpenuhi, maka akan dilempar ke else

function checkHour(hour){
    if(hour < 12){
        return "Selamat Pagi"
    } else if (hour >= 12 && hour < 15){
        return "Selamat Siang"
    } else if(hour >= 15 && hour < 18){
        return "Selamat Sore"
    } else {
        return "Selamat Malam"
    }
}

// console.log(checkHour(14))

// --- NESTED IF ---
// --- jika persyaratan if pertama tidak dipenuhi, maka akan langsung terlempar ke else

let v1 = 400;
let v2 = 700;

function checkVNumber(numberA, numberB){
    if(numberA === v1){
        if(numberB === v2){
            return "Value of v1 is 400 and value of v2 is 700"
        } else {
            return "Value numberB invalid"
        }
    } else {
        return "Value numberA invalid"
    }
}

// console.log(checkVNumber(400, 500))
// console.log(checkVNumber(500, 700))
// console.log(checkVNumber(400,700))

// --- TERNARY OPERATOR ---
// --- tanda "?" mewakili if
// --- tanda ":" mewakili else

function ternaryCheckAge(age){

    // if(age > 17){
    //     return "boleh menyetir"
    // } else {
    //     return "belum layak menyetir"
    // }

    const canDrive = age > 17 ? "boleh menyetir" : "belum layak menyetir";
    return canDrive
}

// console.log(ternaryCheckAge(16))
// console.log(ternaryCheckAge(20))

//  ---- TERNARY OPERATOR WITH ELSE-IF ---

function ternaryCheckTemperature(temp){
    const result = temp > 36 ? "kondisi badan masih demam" : 
    `${temp > 32 && temp <= 36 ? "kondisi badan masih normal" : "kondisi badan dingin"}`
    return result
}

// console.log(ternaryCheckTemperature(30))
// console.log(ternaryCheckTemperature(37))

// --- SWITCH CASE ---

function checkTrafficLight(signal){
    switch(signal){
        case "red" : 
              console.log("berhenti")
              break;
        case "orange" :
              console.log("bersiap-siap")
              break;
        case "green" :
              console.log("silahkan jalan")
              break;
        default :
        console.log("warna tidak diketahui")
        break;
    }
}

// checkTrafficLight("orange")
// checkTrafficLight("red")
// checkTrafficLight("blue")

function checkPlacement(number){
    switch(number){
        case 1:
            console.log("selamat, kamu jadi juara pertama")
            break;
        case 2 : 
            console.log("selamat, kamu masih bisa menang")
            break;
        case 3 :
            console.log("lumayan")
            break;
        default :
            console.log("coba lagi ya!")
            break;
    }
}

// checkPlacement(3)
// checkPlacement(6)

console.log(typeof null)