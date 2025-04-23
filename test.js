// Part - B
const ages = [1,2];
const ages1 = [4, 5];
function calculateAge(agesArray){
    const result = agesArray.reduce((a,d)=>{
        return a+d;
    })
    return result;
}

//1. filter() => this method return few elements
//2. example1 : integers
const numbers = [1 ,2 ,3 ,4 ,5];
// SYNTAX =>  varName.filter(function(){});
// let a = function(){}
//varName.filter(a);
const filter_num =
    numbers.filter((number) => {
        return number>3;
    });
console.log("filtered numbers: ", filter_num);
//example 2 => Strings
const names = ["John", "Doe", "Simran", "Preet"];
console.log("Names: ", names);
const filter_names =
    names.filter(function (name) {
        const first_char = name.charAt(0).toUpperCase();
        return first_char > "J";

    })
console.log("filter_names: ", filter_names);

//2. reduce() => this method return one element as an output
//example 1: integers
const numbers3 = [1 ,2 ,3 ,4 ,5];
console.log("Before numbers:  ", numbers3);
//to add
let d= function add(a,b){
    let c = a + b
    return c;
}
const reduce_num = numbers3.reduce(d);
const reduce_num1 = numbers3.reduce((a,d)=>{
    return a + d;
});
console.log("Reduce num: ", reduce_num);
console.log("Reduce (params): ", reduce_num1);
//example 2: string
const sentence = "I studied at GBC college";
console.log("sentence: ", sentence.split(" "));
const filter_string =
    sentence.split(" ").reduce((a, d)=> a);
console.log("Filter string: ", filter_string);
//3. map() => trending in the code and most of the developers use it most
const numbers4 = [1, 2, 3, 4, 5];
// map everytime get a help from the operators such as OR/AND/<,>
const map_num =
    numbers4.map((num)=>num*2);
console.log("map_num: ", map_num);
