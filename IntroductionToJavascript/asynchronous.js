// --- CALLBACK
// -- sebuah function yang dipanggil setelah melakukan sebuah proses

// -- Contoh 1

function buyer(message, price){
    console.log("Pesan martabak dong? " + message + " : " + price)
}

function seller(callback){
    console.log("Pesan martabak lagi dong? ... (wait sedang dimasak)")
    setTimeout(() => {
        callback("Ok, martabak sudah selesai kaka, harganya segini ya ", 25000)
        // buyer(message, price)
    }, 2000)
}

// seller(buyer)

// -- Contoh 2

function doTask(callback){
    console.log("Apakah tugasmu sudah selesai?")
    callback()
    console.log("Apakah sudah beres?")
}

function reminder(){
    setTimeout(() => {
        console.log("Kerjaan saya sudah beres!")
    }, 2000)
}

// doTask(reminder)

// -- Contoh 3

function driver(callback){
    console.log("Titik sudah sesuai maps, ya Kak!")
    console.log("Pesanan sudah sesuai aplikasi, ya Kak?")
    callback("Pesanan sudah sesuai aplikasi, ya Kak?")
}

function user(message){
    if(message === "Pesanan sudah sesuai aplikasi, ya Kak?"){
        console.log("Pesanan sudah sesuai, Kak")
    }
    setTimeout(() => {
        console.log("Sudah, pak. Terima kasih ya")
    }, 2000)
}

driver(user)