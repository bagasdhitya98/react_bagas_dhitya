// --- OBJECT ---

const motorbike = {
    color: "white",
    type: "scooter",
    year: 2022
}

// --- mengakses properties dalam object

// console.log("access properties of type : ", motorbike.type)
// console.log("access properties of year : ", motorbike.year)
// console.log("check properties of type : ", typeof motorbike.type)
// console.log("check properties of year : ", typeof motorbike.year)

// --- menambahkan sebuah key di dalam object
const user = {
    name: "John Doe",
    languageProgramming: "Javascript",
    workingExperience: 3
}

user["hobby"] = ["playing game", "fishing", "playing music"]
// console.log(user)

// --- update value di dalam object
const device = {
    type: "handphone",
    name: "iPhone 11",
    year: 2021
}

// console.log("before update : ", device)
// device["name"] = "Samsung S20"
// console.log("after update : ", device)

// --- menghapus value di dalam object
const fruit = {
    name: "Strawberry",
    color: "red",
    price: 20000
}

// console.log("before delete : ", fruit)
// delete fruit.price
// console.log("after delete : ", fruit)

// --- NESTED OBJECT ---
const person = {
    name: "John Doe",
    title: "Software Engineer",
    address : {
        street: "Orchard Road, Singapore",
        city: "Singapore",
        zip: 18909
    },
    hobbies: ["playing basketball", "reading a book", "fishing"]
}

// console.log("result of city : ", person.address.city)
// console.log("result of hobbies : ", person.hobbies[2])

// --- LOOPING OBJECT ---
const pet = {
    name: "dog",
    race: "golden",
    color: "brown"
}

// for(let key in pet){
//     console.log("name of key : ", key)
//     console.log("name of value : ", pet[key])
// }

// --- CLONING OBJECT ---
const laptop = {
    type: "Apple",
    name: "Macbook Pro",
    year: 2022
}

const dupe1 = Object.assign({}, laptop) // copy menggunakan object assign
const dupe2 = {...laptop} // copy menggunakan spread operator
const dupe3 = JSON.parse(JSON.stringify(laptop)) // copy menggunakan JSON method (efektif untuk melakukan deep copy sekaligus mengkonversi ke string)

// --- JSON DATA FROM API ---
const data = [
    {
        id: 1,
        title: "air purifier",
        price: 4700000
    },
    {
        id: 2,
        title: "stein cookware",
        price: 1899000
    },
    {
        id: 3,
        title: "water purifier",
        price: 19800000
    }
]

const title = data.map((item) => {
    return item.title
})

const id = data.map((item) => {
    return item.id
})

console.log("list of id : ", id)
console.log("list of title : ", title)