// --- PROMISE ---
// -- sebuah object yang merepresentasikan sebuah kejadian yang bisa terpenuhi (fulfill) atau gagal(fail)

// Contoh -- 1
function bentengTakeshi(){
    return new Promise((resolve, reject) => {
        console.log("--- BENTENG TAKESHI DIMULAI! ---")
        console.log("Doakan aku, kawan!")
        let randomize = Math.floor(Math.random() * 50)
        console.log("Kamu dapat skor : ", randomize)
        console.log("Perlombaan dimulai ...")
        setTimeout(() => {
            if(randomize > 35){
                if(randomize > 40){
                    resolve("Selamat, kamu mendapatkan nilai yang tinggi")
                } else {
                    resolve("Selamat, kamu sudah lumayan")
                }
            } else {
                reject("Wah sayang sekali, kamu belum berhasil. Jangan menyerah!")
            }
        }, 3000)
    })
}

bentengTakeshi()
.then((response) => {
    console.log("Hasil Pertandingan : ", response)
})
.catch((error) => {
    console.log("Apa yang terjadi? ", error)
})
.finally(() => {
    console.log("Perlombaan Selesai")
})