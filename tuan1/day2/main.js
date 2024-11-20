/*
Cấu Trúc Điều Khiển và Vòng Lặp
    - Bài tập:
      - Viết chương trình yêu cầu người dùng nhập tuổi và trả về thông báo dựa trên độ tuổi.
      - Sử dụng vòng lặp để in ra các số từ 1 đến 50.
      - Viết chương trình kiểm tra số nguyên tố.
*/
// ========== for================================================================
// - Sử dụng vòng lặp để in ra các số từ 1 đến 50.
for (let i = 1; i <= 50; i++) {
  console.log(i);
}
// =======  while=============
let k = 1;
while(k<=50) {
    console.log(k);
    k++
}
// ======== do-while=============
let z = 1;
do {
    console.log(z);
    z++
} while(z<=50);
// kiem tra so nguyen to
let i= 8;
let result = ""
for (let j = 2; j < i; j++) {
    if (i % j === 0) {
        result +=' la so nguyen to'
        break;
    }
}
if (result === "") {
    console.log(i+" la so nguyen to");
}else{
    console.log(i+" khong la so nguyen to");
}
// kiem tra tuoi
const age = parseInt(prompt("Vui lòng nhập tuổi của bạn:"));
switch (true) {
    case (age < 0):
      console.log("Tuổi không hợp lệ!");
      break;
    case (age >= 0 && age <= 12):
      console.log("Bạn là trẻ em.");
      break;
    case (age >= 13 && age <= 17):
      console.log("Bạn là thanh thiếu niên.");
      break;
    case (age >= 18 && age <= 59):
      console.log("Bạn là người trưởng thành.");
      break;
    case (age >= 60):
      console.log("Bạn là người cao tuổi.");
      break;
    default:
      console.log("Vui lòng nhập số hợp lệ!");
  }

