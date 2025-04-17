const data = [
    [ ,[ , , , {
        string: [ ,{
            value : "hello"
        }]}]
    ]

]

// const {_, value } = data[0][1][3].string[1]
// const {string:[_a,{value}]} = data[0][1][3]
const [[_a,[_b,_c,_d,{string:[_e,{value}]}]]] = data

console.log(value);
