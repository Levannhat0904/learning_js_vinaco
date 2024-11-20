console.log("day 3")
// - Viết các hàm tính tổng, hiệu, tích, và thương của hai số.
// - Tạo đối tượng mô tả thông tin sinh viên (tên, tuổi, điểm) và viết hàm để in thông tin sinh viên.
// - Viết hàm sử dụng rest parameters để nhận vào nhiều số và trả về tổng của chúng.


// Tính t��ng, hiệu, tích, và thương của hai số
console.log(calculate(3,4,"+"))

function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return tong(a, b);
        case '-':
            return((a, b) => a - b)(a, b);
        case '*':
            return ((a, b) => a * b)(a, b);
        case '/':
            return ((a, b) => a / b)(a, b);
        default:
            throw new Error('Invalid operator');
    }
}

function tong( a, b ) {
    return a + b;
}
// rest parameters, và spread operator.
let arr1 = [1,2,3,4,5,6,7,8]
let [x,y,z] = arr1
console.log(x,y,z)
let [d,,e,f] = arr1
console.log(d,e,f)
let [g,h,...rest] = arr1
console.log(g,h,rest)

function sum(...rest){
    return rest.reduce((a, b) => a + b,0)
}
console.log(sum(1,2,3,4,5))

// Tạo đối tượng mô tả thông tin sinh viên
let student = {
    name: "Nhat",
    age: 20,
    score: 9,
    printInfo () {
        console.log(`Name: ${this.name}, Age: ${this.age}, Score: ${this.score}`)
    }
}
student.printInfo()