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
    value : "Selamat Pagi",
}

console.log(data[0][1][3].string[1].value); // Selamat
console.log(data2[0][1][3].string[1].value); // Selamat


const bio = {
    fullName: "John O'Connor",
    age: 30
}

const extraInfo = {
    skills: ["Web Programming", "Painting"],
    educations: [
        {
            name: "SMP 1 Denpasar",
            year: 2012
        }
    ]
}

const newData = {
    skills: ['Hiking'],
    educations: [{
        name: "SMP 1 Jakarta",
    year: 2000 
    }]
}
 
extraInfo.skills = [...extraInfo.skills, ...newData.skills]
extraInfo.educations = [...extraInfo.educations, ...newData.educations]

const profile = {
    ...bio,
    ...extraInfo
}

console.log(profile);
