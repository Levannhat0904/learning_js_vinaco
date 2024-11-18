// - Viết hàm nhận vào một mảng số nguyên và trả về tổng của các số trong mảng.
let arr1 = [1, 2, 3, 4, 5]
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray(arr1))
// - Sử dụng map để tạo ra một mảng mới từ mảng ban đầu, trong đó mỗi giá trị là bình phương của giá trị gốc.
let arr2 = arr1.map(item => item*2)
console.log(arr2)
// - Sử dụng filter để lọc ra các số chẵn trong một mảng.
let arr3 = arr1.filter(item => item % 2 === 0)
console.log(arr3)
// hàm find
let arr4 = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" },
  { id: 3, name: "Bob" }
]
let found = arr4.find(item => item.id === 2)
console.log(found)