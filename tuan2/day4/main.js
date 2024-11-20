// URL của API cần gọi
const apiUrl = "https://jsonplaceholder.typicode.com/users";

const fetchDataFromAPI = async ()=>{
  try{
    const response = await fetch(apiUrl);
    if(!response.ok){
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    // hiển thị ra người dùng đầu tiên
    if(data.length>0){ 
      console.log("người dùng đầu tiên:", data[0]);
    }
    console.log("Dữ liệu từ API:", data);
  } catch(error){
    console.error("Lỗi khi gọi API:", error.message);
  }
}
// Gọi hàm với URL
fetchDataFromAPI(apiUrl);
