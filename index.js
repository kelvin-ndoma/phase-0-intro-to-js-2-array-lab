const cats = ["Milo", "Otis", "Garfield"];
 
function destructivelyAppendCat(name) {
    cats.push("Ralph")
    
}

function destructivelyPrependCat(name){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat() {
    cats.pop("Garfield")
    return cats
}
function destructivelyRemoveFirstCat(){
    cats.shift("Milo")
    return cats
}
function appendCat(Ralph){
    var newArray = cats.slice();
    newArray.push(Ralph)
    return newArray
}
function prependCat(Ralph){
    var newArray = cats.slice();
    newArray.unshift(Ralph)
    return newArray
}
function removeLastCat() {
    let newArray=[]
    return newArray=cats.slice(0,-1)
}
function removeFirstCat() {
    let newArray=[]
    return newArray=cats.slice(1)
}
