const _ = require('lodash');


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

let res1 = _.map(members,member=>member["name"].split(" ")[0])

console.log(res1)
// 2. Make everyone's last names in UPPERCASE in given array of objects

console.log("2. Make everyone's last names in UPPERCASE in given array of objects")

 _.forEach(members,member=>{
    let [f,l] = member["name"].split(" ")
    member["name"] = `${f} ${l.toUpperCase()}`
 })

console.log(members)
// 3. Get entries where age is between 41-60

console.log("3. Get entries where age is between 41-60")

let res2 = _.filter(members,member=>{
     if (member.age){
        return member.age>41 && member.age<60
    } 
})

console.log(res2)

// 4. Get average age


console.log("4. Get average age")
let res4 = _.reduce(members,(initalVal,member)=>member.age ? member.age+initalVal : initalVal,0)
console.log(Math.floor(res4/members.length))



// 5. Get Person with maximum age


console.log("5. Get Person with maximum age")

let res5 =_.maxBy(members,"age")
console.log(res5)
// 6. Divide persons in three groups, result should look like
//     {
//       'young': [],
//       'old': [],
//       'noage': []
//     }
//     Less than 35yrs is young, above 35 is old


console.log(" 6. Divide persons in three groups, result should look like")


let res6 = {
      'young': [],
      'old': [],
      'noage': []
    }

_.forEach(members,member=>{
    if (member.age &&  member.age<35){
        res6["young"].push(member)
    }else if(member.age &&  member.age>35){
        res6["old"].push(member)
    }else{
        res6["noage"].push(member)
    }
})


console.log(res6)

// 7. add a new member to same members array instance at index 2'

console.log("7. add a new member to same members array instance at index 2")

const newMember  = { name: 'Ajay Meena', age: 27 }

 members.splice(2,0,newMember)

 console.log(members)
// 8. extract first and second element using destructing

console.log("8. extract first and second element using destructing")

const [first,second] = _.at(members,[0,1])

console.log(first,second)
// 9. Create a new array instance adding a new member at index 0,
//    and keeping existing afterwards

console.log("9. Create a new array instance adding a new member at index 0, and keeping existing afterwards")

const newMember2  = { name: 'Vijay Meena', age: 24 }

 const res9 = _.concat([newMember2],members)

 console.log(res9)

// 10. Extract properties of object using destructuring
// 11. Rename extracted property of object while destructing
// 12. Destructure any property of an object and use spread operator
//     to get remaining properties in an object
// 13. Create a new object by copying using spread operator, override
//     one of the properties to assign a new value in the same step
// 14. Use reduce function on array and object

console.log("14. Use reduce function on array and object")

let arr1 = [1,2,3,4,5,6]
let obj1 = {"product1":["mobile",20],"product2":["laptop",5]}


let resArr14 = _.reduce(arr1,(initalVal,currentVal)=>initalVal+currentVal,0);

console.log(resArr14)

let resObj = _.reduce(obj1,(intialValue,value)=>{
     intialValue["totalQuantity"] +=value[1]
     return intialValue
},{"totalQuantity":0})

console.log(resObj)