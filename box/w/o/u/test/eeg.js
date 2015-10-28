console.log('in eeg, outside of function')




/// CONFIRMS: a function returned by another function, does have access to
//the scope of the client code that called the function that returned it
//(and is now calling it)
//
//it also has access to its closure properties (those defined within the
//function that returned it
//
//finally, we also see that functions that were returned from a function call
//can also pollute the scope of the client

b = "BE"

a = function (){

    c = "CEE"

    return function () {
        console.log("inside a's return function")
        console.log("b: " + b)
        console.log("c: " + c)
        pollution = "FUN"
    }
}

a()()
console.log("was it fun?" + pollution)
// now lets change it
// we can see that a function defers to its closure for pops, but
// if not defined, it looks at the client scope.. that's the scope chain!





d = "DEE - for client"
e = "EEEEEEEEEE!!!!! - for client only"


zebra = function (){

    var d = "DAY - for closure"

    return function () {
        console.log("inside z's return function")
        console.log("d: " + d)
        console.log("e: " + e)
    }
}

zebra()()







module.exports = function (){
console.log('in eeg, at top of function')


    console.log('dirname:'+ __dirname)
    console.log('filename:'+ __filename)



}