function createCounter(){
    let count = 0;
    function increase(){
        return ++count
    }
    return increase
}
const counter = createCounter()
console.log(counter()) // 1
console.log(counter()) // 2
console.log(counter()) // 3
