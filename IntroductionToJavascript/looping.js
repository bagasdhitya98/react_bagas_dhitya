// --- Jenis looping di Javascript :
// 1. for loop
// 2. while loop
// 3. for in
// 4. for of
// 5. forEach
// 6. map

// for loop : digunakan ketika kondisi awal, dan iterasi sudah jelas -> looping berdasarkan awal, iterasi, dan increment/decrement
// while loop : digunakan ketika kondisi awal, dan iterasi belum jelas -> looping berdasarkan kondisi aja

// kalo diibaratkan, for itu switch case, dan while itu if else biasa

// --- FOR LOOP ---
function loopingIncrement(number){
    for(let i = 0; i <= number; i++ ){
        console.log("result of increment : ", i)
    }
}

// loopingIncrement(10)

function checkGanjilGenap(number){
    for(let i = 1; i <= number; i++){
        if(i % 2 === 0){
            console.log(i + " adalah bilangan Genap")
        }
    }
}

// checkGanjilGenap(10)

// --- NESTED FOR LOOP ---
function nestedForLoop(number){
    for(let i = 0; i < number; i++){
        console.log("main looping : ", i)
        for(let j = 0; j < number; j++){
            console.log("sub looping : ", j)
        }
    }
}

// nestedForLoop(3)
// nestedForLoop(5)

// --- WHILE LOOP ---
function whileLoop(end, start){
    while(start <= end){
        console.log("start : ", start)
        start++
    }
}

function nestedWhileLoop(number){
    let i = 0;
    while(i < number){
        console.log("main looping : ", i)
        let j = 0;
        while(j < number){
            console.log("sub looping : ", j)
            j++
        }
        i++;
    }
}

// whileLoop(10, 5)
nestedWhileLoop(3)

// --- DO WHILE LOOP ---
function doWhileLoop(number){
    let i = 0;
    do{
        console.log("cetak urutan nomor ke ", i)
        i++
    } while (i < number)
}

function nestedDoWhile(number){
    let i = 0;
    do{
        console.log("main looping : ", i)
        let j = 0;
        do{
            console.log("sub looping : ", j)
            j++
        } while (j < number)
        i++
    } while(i < number)
}

// doWhileLoop(10)
// nestedDoWhile(4)
