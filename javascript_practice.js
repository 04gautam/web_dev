
// This is the prectice of javascript by Hitlar gautam I uncomment all of the code here but
// when you want to run just copy that piece of code and comment rest code   Thanks....


const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + "this") this is not the right way to write a string
// don't use it in any code and interview code please thanks

console.log(`Hello my name is ${name} and my repo count is ${repoCount};`)


const gameName = new String('hitesh-hc-com')

const myString = "    hitlar    "

console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(typeof gameName)
console.log(gameName.charAt(8))
console.log(gameName)
console.log(gameName.indexOf("t"))


console.log(`This is the my string ${myString.trim()}`)

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-12)
console.log("where is this string", anotherString);


const url = "https://hitesh.com/hitesh%20choudhary";


console.log(url);
console.log(url.replace('%20', '-'))


console.log(url.includes(''));
console.log(gameName.split('-'));


 const score = 400;
 console.log(score);

 const myNum = new Number(467)
 console.log(myNum);

const hundreds = 10000000;
console.log(hundreds)
console.log(hundreds.toLocaleString('en-IN'))


console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(5.234));
console.log(Math.ceil(5.234));

let newString  = "This is new string";
const myString = new String('this is hitlar gautam')
console.log(myString);


let myArray = {
    myName:'hitlar',
    myAddress:'Vill-Bhonra Dis-Bulandshahr UP ',
    phone: "6398971981"

}
console.table(myArray)

let myArray = [2,2,3,30, 3, 4 ]


myArray.push(100)
myArray.push(48)
console.log(myArray);


console.log(myArray.sort())

console.log(myArray.reverse())
console.log(myArray.pop())
console.log(myArray.pop())
console.log(myArray.pop())
console.log(myArray.slice([1]), [3])
console.log(myArray)


let myObj = {
    Name: 'hitlar', 
    class: "12th", 
    phone: '6398971981', 
    status: "BCA"

}

console.table(myObj);

if(myObj.Name === "hitlar"){
    console.log(`You are welcome ${myObj.Name}`)
}
else{
    console.log('your are not the right person');
}

const mySym = Symbol("key1")

const JsUser = {
    name: "hitesh",
    "full name": "hitesh chaudhery",
    [mySym]: "myKey1",
    age: 18,
    location: "jaipur",
    email: "www.hitlargautam@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

console.log(JsUser.name);
console.log(JsUser["age"]);
console.log(JsUser["full name"]);
console.log(JsUser.email)
console.log(JsUser["mySym"]);

JsUser.email = "www.google@gmail.com"
console.log(JsUser["email"])


JsUser.greeting = function(){
    console.log("Hello user ")
};

JsUser.greetingTwo = function(){
    console.log(`Hello js user ${JsUser.name}`)
}


console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())


let myObj = {
    "name": "hitlar",
    "Class": "12th",
    "Phone No." : "6398971981",
    "Gmail id": "www.starkdiary@gmail.com",
    "isLoggedIn": true
}

console.log(myObj.name)
console.log(myObj["Phone No."])
console.log(myObj["Gmail id"])
console.log(myObj["isLoggedIn"])

console.table(myObj)



const tinderUser = new Object() //this is singelton obj.

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)
// console.table(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullnme:{
            firstname: "hiteh",
            lastname: "chaoudhary"
        }
    }
}

console.table(regularUser.fullName.userfullnme.lastname)


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = {obj1, obj2}


const obj3 = Object.assign({},obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}

const user = [
    {

    }
]

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasWonProperty('isLoggedIn'))



let course = {
    "coursename": "js In Hindi",
    "price": "999",
    "courseInstructor": "hitesh" 

}

//dstructuring
const {coursename: mycourse} = course
const {courseInstructor: inst} = course

console.log(mycourse)
console.log( inst)


function addTwoNumber(num1 = 0, num2 = 0){
    console.log(num1+num2)
}

addTwoNumber(2, 5)

function loginUserMessage(username = "Koi Aadmi" ){
   
    return `${username} just logged in`
}


console.log(loginUserMessage("Hitesh"))

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(3, 200, 44, 354,"sdlf"))


const user = {
    username: "hitesh", 
    price: 199
}
function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)


}

handleObject(user);

handleObject({
    username: "hitlar gautam", 
    price: 299
})

const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));

let myArray = [12, 23, 435, 5, 67]


function showArray(myArray){
    console.log(myArray[0])
}

showArray(myArray)


function one(){
    const username = "Hitesh sir"

    function two(){
        const website = "youtube"
        console.log(username);
    }
 

    if(true){
        const username = "hitesh sir"
        
        if(username === "hitesh sir"){
            const website = " youtube"
            console.log(username + website);
        }
        console.log(website);
    }
console.log(username);


console.log("Plus one wala ",addone(3));

function addone(num){
    return num+1;
}


const addTwo = function(num){
    return num+2;
}


console.log("plus two wala", addTwo(3))


// *******************************object with 'this' key word ***************************** */


const myObj = {
    userName: "Gautam",
    course: "BCA", 
    price: 1999,

    inObj: function(){
        console.log(this.price)
    }

};

myObj.inObj()

myObj.roll = 90;


function showMydata(theData){
    console.log(`My name is ${theData.userName} course is ${theData.course} and price ${theData.price}`)
}

showMydata(myObj);



const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username},  welcome to website`)
        console.log(this);
    }
}

user.welcomeMessage()

user.username = "sam"

user.welcomeMessage()
console.log(this);





// -------------------------------------------------------------------------


num1 = 12
num2 = 8

const addTwo = (num1, num2) =>{
    return num1+num2;
}


const addTwo = (num1, num2) => (num1+num2);


const addTwo = (num1, num2) => (num1+num2);

const addTwo = (num1, num2) => ({username: "hitesh"});


console.log(addTwo(10, 4))



// ------------------------immediately Ibnvoked Function Expressions (IIFE)*************************



(function chai(){

                named IIFE
    console.log("DataBase connected again: ");
})();




( (name) =>{
    console.log("This function is running very fast", name)
})("STARK")



let myArray = [1, 2, 3, 4]

 let addArry = 1;
for(let i=0; i<myArray.length; i++){
     
        addArry = addArry*myArray[i]

   
}
 

console.log(addArry);
 
// ************************Higher Order array loops************************

for of loop
                        ------------//
We use "for of" loop for the arrays most of the time and "for in" for the objects
                        -------------//

const arr =  [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num)
    
}

const greeting = "Hello world";

for(const greet of greeting){
    console.log("each character is: ",greet)
}

const map = new Map()

map.set('In',"India")
map.set('USA',"United state of America")
map.set('FR',"France")

for (const [key, value] of map) {
    
    console.log(key,':-', value)
}


const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
};

    for (const key in myObject) {
    //  console.log(key ,":", myObject[key]);
    }


    const myArray = ["js", "cPP", "python", "ruby"]

    for(const key1 in myArray){
        console.log(myArray[key1])
    }

// ***********************for each loop *************************** */

const theArray = ["js", "python", "cpp", "python", "ruby"]

theArray.forEach(function (val){
    console.log(val)
})        

theArray.forEach(element => {
    console.log(element)
});


const theArray = ["js", "python", "cpp", "python", "ruby"]

const theObj = {
    js: "javascript",
    Py: "python",
    cpp: "C++", 
    rb: "Rubby"

}

theArray.forEach((val, val2, val3) => {
    console.log(val,val2, val3)
});


const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

    myCoding.forEach((val) =>{
        console.log(val.languageName,":-",val.languageFileName)
    })


// ************************************filter*************************************


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const newNums = myNums.filter( (num) => {

    return num >4
} )
console.log((newNums));

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
    
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
    
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 20010},
    
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
    
]

let userBooks = books.filter( (bk) => bk.genre === 'History')
userBooks = books.filter( (bk) =>{
    return bk.publish >= 1995 && bk.genre === "History"

})
console.log(userBooks)

// ************************************** Map function ****************************


const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers.map ((num) =>{return num+10})

const newNums = myNumbers.map( (num) => num * 10)
                    .map( (num)  => num +1)
                    .filter( (num) => num>= 40)


console.log(newNums)

// ********************************** ruduce *************************************

    const array1 = [1, 2, 3, 4];

    const initioalValue = 0;

    const sumWithInitial = array1.reduce ( (acc, currval)  => acc + currval, 0);

console.log(sumWithInitial);


const shoppingCart = [
    {
        itemName: "Js course",
        price: 2999
    },

    {
        itemName: "python",
        price: 999

    },

    {
        itemName: "Mobile dev course",
        price: 5999,
    },
    {
        itemName: "data science course",
        price: 12999,
    },
]


const priceToPay = shoppingCart.reduce( (acc, item) => acc+ item.price,0);

console.log(priceToPay);
