// data[0][1][3].string[1].value // Hello

const data = [
    [ ,[ , , , {
        string: [ ,{
            value : "hello"
        }]}]
    ]

]
   
data[0][1][3].string[1] = {
    ...data,
    value: "Selamat"
}

const data2 = {
    ...data,
    value : "Selamat Pagi"
}

console.log(data[0][1][3].string[1].value); // Selamat
console.log(data2[0][1][3].string[1].value); // Selamat


