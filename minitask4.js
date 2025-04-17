// Menentukan bilangan ganjil dan genap dengan callback

const oddEvenNumber = (num, cv) =>{
    if (typeof num != "number"){
        console.log("Input harus bertipe number");
        return
    }
    return cv(num)
}

const oddEven = (x) => {
    if (x % 2 == 0 ){
        console.log("Bilangan Genap");
    } else {
        console.log("Bilangan Ganjil");
    }
}

oddEvenNumber(23, oddEven)
