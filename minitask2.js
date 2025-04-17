// fungsi menghitung luas dan keliling lingkaran

let phi = 0
const cirlce = (circleRadius) => {
    if (circleRadius % 7 == 0){
        phi = 22/7
    } else{
        phi = 3.14
    }

    let circleOfArea = 0
    let circcumference = 0

    circleOfArea += phi * circleRadius * circleRadius
    circcumference += 2 * phi * circleRadius

    console.log(`Luas lingkaran yaitu ${circleOfArea} dan Keliling lingkarannya ${circcumference}`);
    
}

cirlce(8)