
// logical operators && || === 
// strings
// objects


// string number bool null undefined array object

// string number bool  undefined null

// array object symbols



console.log(5 == "5")

console.log("" == false)
console.log(0 == false)
console.log(false == null)
console.log(false == undefined)

console.log(5 === "5")

let str = "123"
let str1 = "234"

console.log(str + str1)

console.log("fsdfsdf \t sdfsdfs")


let string = "hello world" // "Hello World"

let newStr = "";
// toCapitalize()
for(let i = 0; i < string.length; i++ ){ 
    if(i == 0 || string[i - 1] == " "){
        newStr += string[i].toUpperCase(); // "h" -> "H"
        continue;
    }

    newStr += string[i]
}


let string1 = "HELLO WORLD" // "hELLO wORLD"

let newStr1 = "";

for(let i = 0; i < string1.length; i++ ){ 
    if(i == 0 || string1[i - 1] == " "){
        newStr1 += string1[i].toLowerCase(); // "h" -> "H"
        continue;
    }

    newStr1 += string1[i]
}


console.log(newStr1);


// .length
// .toUpperCase()
// .toLowerCase()

let s = "hello world" // immutable


s.toUpperCase()
console.log(s);
 
for(let i = 0; i <s.length; i++) {
    s[i] = "o";
}

let world = "world"

let error = false;

for (let i = s.length - world.length; i < s.length; i++) {
    if(s[i] != world[s.length - i]){
        error = true;
        continue;
    }
}
if(error) {
    console.log("shecdomaa")
}

console.log(s.endsWith("jandaba")) // true || false

// gadaawers
// gamomitans igives
// shecdomas mivigeb


console.log(s);