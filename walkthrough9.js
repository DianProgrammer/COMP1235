//1. One d, Two d array => []
const oned = [1,2,3];
console.log("1-D",oned);
const twod = [
    ["A", "B"],//0
    [5,6], //1
    ["C", "D"] //2
];
console.log("2-D",twod);
//number of elements in array => length
console.log("Number 1-D: ",oned.length);
console.log("Number of 2nd elements in 2-D:",twod[1].length);
//2. Scope of the variable in the function
// whatever is only have it is the local like my student id / my phone
// what ever is located to group of the people such as george brown college is global
let a =5;//global
function outer(name){
    console.log("Outer function: "+ a);
    console.log("Outer function: "+ name);
    function inner(){
        let b = 10;//local var
        console.log("Inner function: " + a);
        console.log("Inner function: " + b);//local var
        console.log("Inner function: " + name);//global var
    }
    //console.log("Inner function: " + b);//undefined, not work
    inner();
}
outer("Kiana");
//class like each group that can have several property that can characteristics of it
//like class of students and then the property of student id, birth data and several things relayed to the students

//3. Example of the classes
//Syntax => class ClassName{}
//name, address, city
//pass the parameters/args/properties => constructors
class Customer {
    constructor(name, address, city){
        this.name = name;
        this.address = address;
        this.city = city;
    }
}
// for calling :
//need to create instance  => new
let cust1 = new Customer(
    "Kiana",
    "123 Street",
    "Toronto"
);

let cust2 = new Customer(
    "ABC",
    "xyz Street",
    "Toronto"
);

console.log("Customer 1: ", cust1);
console.log("Customer 2: ", cust2);

//4. CALLBACK
function SumAndAvg(numbers, callback){
    let sum = 0;
    for(let i = 0; i<numbers.length; i++){
        sum += numbers[i];//add
    }
    let avg = sum / numbers.length;
    callback(sum, avg);
}

function display(sum, avg){
    console.log("Sum: ", sum);
    console.log("Average: ", avg);
}

SumAndAvg([1,2], display);
SumAndAvg([5,5], display);


//5. JSON
const person = {
    name: "John",
    address: "123 street",
    city: "Toronto",
}


//convert json into string => stringify
let conv_str2 = JSON.stringify(person);
console.log(conv_str2);



