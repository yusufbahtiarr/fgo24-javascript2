const temperature = {
    celcius : 89,
    fahrenheit : function() {
        let convertFarenheit = 9/5 * this.celcius + 32 
        return convertFarenheit;
    },
    kelvin : function(){
        let convertKelvin = 4/5 * this.celcius
        return convertKelvin;
    },
    reamur : function(){
        let convertReamur = this.celcius + 273
        return convertReamur;
        
    },
    convertTemperature : function() {
        console.log(`Hasil Konversi Celcius ke Farenheit ${this.fahrenheit()}`);
        console.log(`Hasil Konversi Celcius ke Kelvin ${this.kelvin()}`);
        console.log(`Hasil Konversi Celcius ke Reamur ${this.reamur()}`);
    }
}

temperature.convertTemperature(12)
