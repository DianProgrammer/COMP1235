//second file
console.log(b);

// Topic 1 : Async function
// Keyword => async
// They always return promise --< you are not follow the rules as the same as the part that actually we say
// out of the rules
// promise is the 2 day that they want to give back the money
// these use for transaction
// await --> to complete the function of paying and fo complete the task
// async come when I do not do it in the exact time that they give us

async function promiseReturner (){
    return "This is a Promise Object";
}

//Calling as the same as function
console.log("Async Function: ", promiseReturner());

// await : waiting for the result done (waiting time)
// Topic 2: AWAIT
async function processPay(){
    try{
        let data = await payFull();
        console.log("Processing Pay");
    }catch(err){
        console.log("Error: ", err);
    }
}
console.log("Await async: ", processPay());
console.log("Processing Payment................ ");
// THEN & CATCH keyword we can use
function promiseReturner1 (){
    return Promise.resolve("Resolved");

}
let p1 = promiseReturner1();
console.log("Resolved: ", p1);
async function promiseReturner2 (){
    let p2 = new Promise((resolve, reject) => {
        let Success = true;
        if(Success){
            resolve(Success);
        }else{
            reject(new Error("Something went wrong"));
        }
    });
    return p2;
}
console.log("Res, Reject: ", promiseReturner2());
promiseReturner2()
    .then(()=>console.log("Success"))
    .catch((err)=>console.log(err));

