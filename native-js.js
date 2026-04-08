const members = [
  {name: 'Rakesh Gupta', age: 20},
  {name: 'Yash Jangid', age: 40},
  {name: 'Firoz Khan', age: 41},
  {name: 'Amrit Srivastava', age: 17},
  {name: 'Chandraprakash Sharma'},
  {name: 'Swpril Ahuja', age: 45},
  {name: 'Yogesh Khatri', age: 51}
];
// 1. Get array of first names of everyone

console.log("1. Get array of first names of everyone")

const firstNames = []
members.forEach(member => {
    if (member.name){
        firstNames.push(member.name.split(" ")[0])
    }
});

console.log(firstNames)

// 2. Make everyone's last names in UPPERCASE in given array of objects
console.log("2. Make everyone's last names in UPPERCASE in given array of objects")

members.forEach(member => {
    if (member.name){

        let [firstName,lastname] = member.name.split(" ")
        member.name = `${firstName} ${lastname.toUpperCase()}`
    }
});

console.log(members)

// 3. Get entries where age is between 41-60

console.log("3. Get entries where age is between 41-60")
const res3 = members.filter(member=>{
    if (member.age){
        return member.age>41 && member.age<60
    }
})

console.log(res3)


// 4. Get average age
console.log("4. Get average age")
let res4 = members.reduce((initalVal,member)=>member.age ? member.age+initalVal : initalVal,0)
console.log(Math.floor(res4/members.length))



// 5. Get Person with maximum age

console.log("5. Get Person with maximum age")

let res5 = members[0] // assuming that the first element has the age 

for (let i = 0; i < members.length; i++) {
    const member = members[i];
    if ( member.age>res5.age){
        res5=member
    }
}   

console.log(res5)

// 6. Divide persons in three groups, result should look like

console.log(" 6. Divide persons in three groups, result should look like")


let res6 = {
      'young': [],
      'old': [],
      'noage': []
    }

members.forEach(member=>{
    if (member.age &&  member.age<35){
        res6["young"].push(member)
    }else if(member.age &&  member.age>35){
        res6["old"].push(member)
    }else{
        res6["noage"].push(member)
    }
})


console.log(res6)

//     Less than 35yrs is young, above 35 is old



// 7. add a new member to same members array instance at index 2
console.log("7. add a new member to same members array instance at index 2")

const newMember  = { name: 'Ajay Meena', age: 27 }

 members.splice(2,0,newMember)

 console.log(members)

// 8. extract first and second element using destructing
console.log("8. extract first and second element using destructing")

const [first,second] = members

console.log(first,second)

// 9. Create a new array instance adding a new member at index 0,
//    and keeping existing afterwards

console.log("9. Create a new array instance adding a new member at index 0, and keeping existing afterwards")

const newMember2  = { name: 'Vijay Meena', age: 24 }

 const res9 = members.toSpliced(0,0,newMember2)

 console.log(res9)

// 10. Extract properties of object using destructuring
console.log("10. Extract properties of object using destructuring")

const newObj  = { name: 'Vijay Meena', age: 24,mobileNumber:22424242 }
const {name,mobileNumber} = newObj
 console.log(name,mobileNumber)


// 11. Rename extracted property of object while destructing

console.log("11. Rename extracted property of object while destructing")

const newObj2  = { name: 'Vijay Meena', age: 24,mobileNumber:22424242 }
const {name:fullName} = newObj
 console.log(fullName)

// 12. Destructure any property of an object and use spread operator
//     to get remaining properties in an object

console.log("12. Destructure any property of an object and use spread operator to get remaining properties in an object")

const newObj3  = { name: 'Vijay Meena', age: 24,mobileNumber:22424242 }
const {name:N,...restInfo} = newObj
 console.log(N,restInfo)

// 13. Create a new object by copying using spread operator, override
//     one of the properties to assign a new value in the same step
console.log("13. Create a new object by copying using spread operator, override one of the properties to assign a new value in the same step")

const newObjexample = { name: 'Vijay Meena', age: 24,mobileNumber:22424242 }


const newObjConstruction = {...newObjexample,name:"ankit"}


console.log(newObjexample)
console.log(newObjConstruction)


// 14. Use reduce function on array and object
console.log("14. Use reduce function on array and object")

let arr1 = [1,2,3,4,5,6]
let obj1 = {"product1":["mobile",20],"product2":["laptop",5]}


let resArr14 = arr1.reduce((initalVal,currentVal)=>initalVal+currentVal,0);

console.log(resArr14)

let resObj = Object.entries(obj1).reduce((intialValue,[key,value])=>{
     intialValue["totalQuantity"] +=value[1]
     return intialValue
},{"totalQuantity":0})

console.log(resObj)
