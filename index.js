
function callback(){}
function receivesAFunction(callback){
    return callback()
}

function returnsANamedFunction(){
    let myFunction = () => {}
 return myFunction
}
function returnsAnAnonymousFunction(){
    return function(){
    }

}