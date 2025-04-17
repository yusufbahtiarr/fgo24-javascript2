// Menentukan bilangan ganjil dan genap dengan callback

const oddEvenNumber = (num, cv) =>{
    return cv(num)
}

const oddEven = (x) => {
    if (typeof x != "number"){
        console.log("Input harus bertipe number");
        return
    }

    if (x % 2 == 0 ){
        console.log("Bilangan Genap");
    } else {
        console.log("Bilangan Ganjil");
    }
}

oddEvenNumber(23, oddEven)