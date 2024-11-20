// - Viết hàm đảo ngược chuỗi.
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello"))
// - Viết hàm kiểm tra một chuỗi có phải là palindrome.
function isPalindrome(str) {
    return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
}
console.log(isPalindrome("nhat"))
// - Sử dụng template literals để hiển thị thông tin sinh viên.
let student = {
    name: "Nhat",
    age: 20,
    score: 9
};
console.log(`Name: ${student.name}, Age: ${student.age}, Score: ${student.score}`);
// - Viêt function phương trình bậc 2 in ra nghiệm đầu vào là 3 số a,b,c
function solveQuadraticEquation(a, b, c) {
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
        console.log("Phương trình vô nghiệm");
    } else if (delta === 0) {
        console.log("Phương trình có nghiệm kép: x = " + (-b / (2 * a)));
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log("Phương trình có 2 nghiệm phân biệt: x1 = " + x1 + ", x2 = " + x2);
    }
}
solveQuadraticEquation(1, -5, 6);