// callback

const convert = (a, type, ck) => {
    if (typeof a != "number"){
        console.log("Input harus bertipe number");
        return
    }

    return ck(a, type)
}

const convertTemperature = (b, tp) => {
    let result = null
    let suhu = ""
    switch(tp){
        case "f":
            result = 9 / 5 * b + 32 
            suhu = "fahrenheit"
            break;
        case "k":
            result = b + 273 
            suhu = "kelvin"
            break;
        case "r":
            result = 4 / 5 * b
            suhu = "reamur"
            break;
    }
     console.log(`Hasil konversi celcius ke ${suhu} adalah ${result}`);
}

convert(23, "f", convertTemperature)
convert(54, "k", convertTemperature)
convert(44, "r", convertTemperature)